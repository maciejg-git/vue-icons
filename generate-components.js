const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const { XMLParser } = require("fast-xml-parser");

const parserOptions = {
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
  ignoreDeclaration: true,
};

let frameworksAll = ["bootstrap", "mdi", "fontawesome"];

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
      brands: "-brand",
      regular: "-regular",
      solid: "-solid",
    },
    suffixPascal: {
      brands: "Brand",
      regular: "Regular",
      solid: "Solid",
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

let attrsList = ["id", "class", "xmlns:xlink", "version"];

let normalizeAttrs = (attrs, icon, framework) => {
  attrs.fill = options[framework].fill;
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
  // all
  frameworks.forEach((f) => {
    fs.rmdirSync(`dist-${f}/${f}`, { recursive: true });
    fs.rmSync(`dist-${f}/index.js`);
  });

  // bootstrap
  if (frameworks.includes("bootstrap")) {
    fs.mkdirSync("dist-bootstrap/bootstrap/", { recursive: true });
  }

  // mdi
  if (frameworks.includes("mdi")) {
    fs.mkdirSync("dist-mdi/mdi/", { recursive: true });
  }

  // fontawesome
  if (frameworks.includes("fontawesome")) {
    fs.mkdirSync("dist-fontawesome/fontawesome/", { recursive: true });
    fs.mkdirSync("dist-fontawesome/fontawesome/brands");
    fs.mkdirSync("dist-fontawesome/fontawesome/regular");
    fs.mkdirSync("dist-fontawesome/fontawesome/solid");
  }
};

let finalizeDist = (dist, index) => {
  fs.writeFileSync(path.join(dist, "index.js"), index);
};

const createComponents = (framework) => {
  const source = path.join("icons", framework, options[framework].dir);
  const dist = "dist-" + framework;

  let index = "";
  let count = 0;

  const parser = new XMLParser(parserOptions);

  const files = getFiles(source);

  files.forEach((i) => {
    const file = i[i.length - 1];
    const sub = i.length > 4 ? i[i.length - 2] : "";

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

    // get file content

    const content = fs.readFileSync(path.join(source, sub, file), {
      encoding: "utf-8",
    });

    // parse SVG

    let parsedSvg = parser.parse(content);
    let data = getSvgData(parsedSvg[0]);
    normalizeAttrs(data.svgAttrs, icon, framework);

    // create JS file

    let renderFunction = createRenderFunction(data);
    const fileJs = createJsFile(
      framework,
      pascalIcon,
      suffixPascal,
      renderFunction,
      tags
    );

    let iconName = `${toPascalCase(options[framework].prefix)}${
      pascalIcon + suffixPascal
    }`;

    // update index

    index += `export { default as ${iconName} } from "./${framework}${
      sub ? "/" + sub : ""
    }/${filename}"\n`;

    // write JS file

    fs.writeFileSync(path.join(dist, framework, sub, filename), fileJs);

    count++;
  });

  finalizeDist(dist, index);

  console.log(`${framework} done (${count} icons)`);
};

handleCommandline();

let frameworks = getFrameworks();

prepareDist();

frameworks.forEach((f) => createComponents(f));
