const fs = require("fs");
const path = require("path");
const { program } = require("commander");

let frameworksAll = ["bootstrap", "mdi", "fontawesome", "phosphor", "remix"];

const options = {
  bootstrap: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "b",
  },
  mdi: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "mdi",
  },
  fontawesome: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "fa",
    suffix: {
      brands: "-brand",
      regular: "",
      solid: "-solid",
    },
    suffixPascal: {
      brands: "Brand",
      regular: "",
      solid: "Solid",
    },
  },
  phosphor: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "ph",
  },
  remix: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "rx",
  },
  test: {
    class: "v-icon",
    fill: "currentColor",
    prefix: "test",
  },
};

program
  .name("generate")
  .usage("[options] vendors")
  .addHelpText(
    "after",
    `

available vendors: bootstrap mdi fontawesome phosphor remix
`
  );

program.parse();

let frameworks = program.args[0] === "all" ? frameworksAll : program.args;

frameworks = frameworks.filter((f) => frameworksAll.includes(f));

const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const toPascalCase = (s) => toCamelCase(s.charAt(0).toUpperCase() + s.slice(1));

let createRenderFunction = (attrs) => {
  return `render() {
    return h(
      "svg",
      ${attrs},
    )
  }`;
};

const createJsFile = (framework, icon, suffix, renderFunction, tags) => {
  return `import { h } from 'vue'
export default {
  $_icon: {
    name: "${icon}",
    vendor: "${toPascalCase(options[framework].prefix)}",
    type: "${suffix}",
    tags: ${JSON.stringify(tags)},
  },
  ${renderFunction}
}`;
};

let svgTagRx = /<svg ([\s\S]*?)>/m;
let svgInnerRx = /<svg.*?>([\s\S]*?)<\/svg>/m;
let svgCommentsRx = /<!--.*?-->/m;

let attrsList = ["id", "xmlns:xlink", "version"];

let removeComments = (str) => {
  return str.replace(svgCommentsRx, "");
};

let getInnerSvg = (svg) => {
  let str = svg.match(svgInnerRx)[1];
  return str.replace(/\n/g, "").replace(/"/g, "'");
};

let parseAttrs = (svgTag) => {
  let attrs = svgTag.match(/(?:[^\s"]+|"[^"]*")+/g);
  return attrs.map((attr) => {
    return attr.replace(/"/g, "").split("=");
  });
};

let normalizeAttrs = (attrs, icon, framework) => {
  attrs.class = options[framework].class;
  attrs.fill = options[framework].fill;
  attrs["data-name"] = `${options[framework].prefix}-${icon}`;
  attrsList.forEach((attr) => {
    if (attrs[attr]) delete attrs[attr];
  });
};

let unpackAttrs = (attrs) => {
  return Object.fromEntries(attrs);
};

let packAttrs = (attrs) => {
  return JSON.stringify(attrs);
};

let parseSvg = (svg, icon, framework) => {
  let str = removeComments(svg);

  let svgTag = str.match(svgTagRx)[1];

  let inner = getInnerSvg(str);

  let attrsArray = parseAttrs(svgTag);

  let attrs = unpackAttrs(attrsArray);
  normalizeAttrs(attrs, icon, framework);
  attrs.innerHTML = inner;
  attrs = packAttrs(attrs);

  return {
    attrs,
    inner,
  };
};

const getFiles = (directory) => {
  let files = [];

  const getFilesRecursively = (directory) => {
    const filesDir = fs.readdirSync(directory);
    for (const file of filesDir) {
      const absolute = path.join(directory, file);
      if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
      } else {
        files.push(absolute.split(path.sep));
      }
    }
  };

  getFilesRecursively(directory);

  return files;
};

const prepareDist = () => {
  frameworks.forEach((f) => {
    fs.rmdirSync(`dist-${f}/`, { recursive: true });
  });

  if (frameworks.includes("bootstrap")) {
    fs.mkdirSync("dist-bootstrap/bootstrap/", { recursive: true });
  }

  if (frameworks.includes("mdi")) {
    fs.mkdirSync("dist-mdi/mdi/", { recursive: true });
  }

  if (frameworks.includes("fontawesome")) {
    fs.mkdirSync("dist-fontawesome/fontawesome/", { recursive: true });
    fs.mkdirSync("dist-fontawesome/fontawesome/brands");
    fs.mkdirSync("dist-fontawesome/fontawesome/regular");
    fs.mkdirSync("dist-fontawesome/fontawesome/solid");
  }

  if (frameworks.includes("phosphor")) {
    fs.mkdirSync("dist-phosphor/phosphor/", { recursive: true });
    fs.mkdirSync("dist-phosphor/phosphor/Bold");
    fs.mkdirSync("dist-phosphor/phosphor/Duotone");
    fs.mkdirSync("dist-phosphor/phosphor/Fill");
    fs.mkdirSync("dist-phosphor/phosphor/Light");
    fs.mkdirSync("dist-phosphor/phosphor/Regular");
    fs.mkdirSync("dist-phosphor/phosphor/Thin");
  }

  if (frameworks.includes("remix")) {
    let remixSub = [
      "Buildings",
      "Business",
      "Communication",
      "Design",
      "Development",
      "Device",
      "Document",
      "Editor",
      "Finance",
      "Health",
      "Logos",
      "Map",
      "Media",
      "Others",
      "System",
      "User",
      "Weather",
    ];

    fs.mkdirSync("dist-remix/remix/", { recursive: true });
    remixSub.forEach((i) => {
      fs.mkdirSync("dist-remix/remix/" + i);
    });
  }
};

let finalizeDist = (dist, framework, index) => {
  fs.writeFileSync(path.join(dist, "index.js"), index);
  fs.copyFileSync(
    path.join("package", "package-" + framework + ".json"),
    path.join(dist, "package.json")
  );
};

const createComponents = (framework) => {
  const source = path.join("icons", framework);
  const dist = "dist-" + framework;

  const files = getFiles(source);

  let index = "";
  let count = 0;

  files.forEach((i) => {
    const file = i[i.length - 1];
    const sub = i.length > 3 ? i[i.length - 2] : "";

    const suffix = options[framework].suffix
      ? options[framework].suffix[sub]
      : "";
    const suffixPascal = options[framework].suffix
      ? options[framework].suffixPascal[sub]
      : "";

    const icon = file.substr(0, file.lastIndexOf("."));
    const pascalIcon = toPascalCase(icon);
    const filename = icon + suffix + ".js";

    const tags = icon.split("-");

    const content = fs.readFileSync(path.join(source, sub, file), {
      encoding: "utf-8",
    });

    let { attrs, inner } = parseSvg(content, icon, framework);

    const renderFunction = createRenderFunction(attrs, inner);

    const fileJs = createJsFile(
      framework,
      pascalIcon,
      suffixPascal,
      renderFunction,
      tags
    );

    index += `export { default as ${toPascalCase(options[framework].prefix)}${
      pascalIcon + suffixPascal
    } } from "./${framework}${sub ? "/" + sub : ""}/${filename}"\n`;

    fs.writeFileSync(path.join(dist, framework, sub, filename), fileJs);

    count++;
  });

  finalizeDist(dist, framework, index);

  console.log(`${framework} done (${count} icons)`);
};

prepareDist();

frameworks.forEach((f) => createComponents(f));
