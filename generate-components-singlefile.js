const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const { XMLParser } = require("fast-xml-parser");
const fg = require("fast-glob");

const parserOptions = {
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
  ignoreDeclaration: true,
};

let frameworksAll = ["bootstrap", "mdi", "fontawesome", "heroicons"];

const options = {
  bootstrap: {
    class: "",
    fill: "currentColor",
    prefix: "b",
    dir: "icons",
  },
  mdi: {
    class: "",
    fill: "currentColor",
    prefix: "mdi",
    dir: "svg",
  },
  fontawesome: {
    class: "",
    fill: "currentColor",
    prefix: "fa",
    dir: "svgs",
    suffix: {
      brands: "brands",
      regular: "regular",
      solid: "solid",
    },
    suffixPascal: {
      brands: "Brands",
      regular: "Regular",
      solid: "Solid",
    },
  },
  heroicons: {
    class: "",
    fill: (i) => {
      if (i.includes("outline")) {
        return "none"
      } else {
        return "currentColor"
      }
    },
    prefix: "h",
    dir: "optimized",
    suffix: {
      solid: "solid",
      outline: "outline",
    },
    suffixPascal: {
      solid: "Solid",
      outline: "Outline",
    },
  },
};

const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const toPascalCase = (s) => toCamelCase(s.charAt(0).toUpperCase() + s.slice(1));

let handleCommandline = () => {
  program
    .name("generate")
    .usage("[options] vendors")
    .addHelpText(
      "after",
      `

available vendors: ${frameworksAll.join(" ")}
`
    );

  program.parse();
};

let getFrameworks = () => {
  let frameworks = program.args;
  frameworks = frameworks.filter((f) => frameworksAll.includes(f));

  return frameworks;
};

let createRenderFunction = (data) => {
  let svgAttrs = JSON.stringify(data.svgAttrs);

  let child = [];

  for (let el of data.elements) {
    let c = `h(
          "${el.element}",
          ${JSON.stringify(el.attrs)}
        )`;
    child.push(c);
  }

  return `render() {
    return h(
      "svg",
      ${svgAttrs},
      [ 
        ${child.join(",\n        ")} 
      ]
    )
  }`;
};

const createJsFile = (framework, icon, iconName, subs, renderFunction, tags) => {
  // let type = subs.map((i) => toPascalCase(i))

  return `
export let ${iconName} = {
  $_icon: {
    name: "${icon}",
    vendor: "${toPascalCase(options[framework].prefix)}",
    type: ${JSON.stringify(subs)},
    tags: ${JSON.stringify(tags)},
  },
  ${renderFunction}
}`;
};

let attrsList = ["id", "class", "xmlns:xlink", "version"];

let normalizeAttrs = (attrs, icon, subs, framework) => {
  attrs.fill = typeof options[framework].fill === 'function' ? options[framework].fill(subs) : options[framework].fill;
  attrs["data-name"] = `${options[framework].prefix}-${icon}`;

  attrsList.forEach((attr) => {
    if (attrs[attr]) delete attrs[attr];
  });
};

let getSvgData = (parsed) => {
  let svgAttrs = parsed[":@"];
  let elements = [];

  for (let el of parsed.svg) {
    let element = Object.keys(el)[0];
    elements.push({ element, attrs: el[":@"] });
  }

  return { svgAttrs, elements };
};

const prepareDist = () => {
  // all
  frameworks.forEach((f) => {
    fs.rmdirSync(`dist-${f}/icons`, { recursive: true });
    // fs.rmSync(`dist-${f}/index.js`);
  });

  // bootstrap
  if (frameworks.includes("bootstrap")) {
    fs.mkdirSync("dist-bootstrap/icons/", { recursive: true });
  }

  // mdi
  if (frameworks.includes("mdi")) {
    fs.mkdirSync("dist-mdi/icons/", { recursive: true });
  }

  // heroicons
  if (frameworks.includes("heroicons")) {
    fs.mkdirSync("dist-heroicons/icons/", { recursive: true });
  }

  // fontawesome
  if (frameworks.includes("fontawesome")) {
    fs.mkdirSync("dist-fontawesome/icons/", { recursive: true });
  }
};

let finalizeDist = (dist, index) => {
  fs.writeFileSync(path.join(dist, "index.js"), index);
};

const createComponents = (framework) => {
  const dist = "dist-" + framework;

  let index = "";
  let count = 0;

  const parser = new XMLParser(parserOptions);

  const files = fg.sync(
    `icons/${framework}/${options[framework].dir}/**/*.svg`
  );

  let singleFile = ""

  files.forEach((i) => {
    const pathData = i.split("/");
    const file = pathData[pathData.length - 1];
    let subs = pathData.length > 4 ? pathData.slice(3, pathData.length - 1) : [];
    subs = subs.map((i) => {
      return options[framework].suffix?.[i] || i
    })

    const icon = file.substr(0, file.lastIndexOf("."));
    const pascalIcon = toPascalCase(icon);
    const filename = icon + (subs.length ? "-" + subs.join("-") : "") + ".js";
    let iconName = `${toPascalCase(options[framework].prefix)}${
      pascalIcon + subs.map((i) => toPascalCase(i)).join("")
    }`;

    const tags = icon.split("-");

    const content = fs.readFileSync(i, { encoding: "utf-8" });

    // parse SVG

    let parsedSvg = parser.parse(content);
    let data = getSvgData(parsedSvg[0]);
    normalizeAttrs(data.svgAttrs, icon, subs, framework);

    // create JS file

    let renderFunction = createRenderFunction(data);
    const fileJs = createJsFile(
      framework,
      pascalIcon,
      iconName,
      subs,
      renderFunction,
      tags
    );
    
    singleFile += fileJs

    count++;
  });

  singleFile = `import { h } from "vue"
${singleFile}`

  fs.writeFileSync(path.join(dist + "-single", "index.js"), singleFile);

  // finalizeDist(dist, index);

  console.log(`${framework} done (${count} icons)`);
};

handleCommandline();

let frameworks = getFrameworks();

// prepareDist();

frameworks.forEach((f) => createComponents(f));
