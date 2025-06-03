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
    license: "MIT",
  },
  mdi: {
    class: "",
    fill: "currentColor",
    prefix: "mdi",
    dir: "svg",
    license: "Apache 2.0",
  },
  fontawesome: {
    class: "",
    fill: "currentColor",
    prefix: "fa",
    dir: "svgs",
    license: "CC BY 4.0",
    suffix: {
      brands: "brands",
      regular: "regular",
      solid: "solid",
    },
  },
  heroicons: {
    class: "",
    fill: "currentColor",
    prefix: "h",
    dir: "optimized",
    license: "MIT",
    suffix: {
      solid: "solid",
      outline: "outline",
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

const createSVGFile = (framework, icon, subs, tags, data) => {
  let svgAttrs = Object.entries(data.svgAttrs)
  svgAttrs = svgAttrs.map(([k, v]) => {
    return `${k}="${v}"`
  }).join(" ")

  let elements = data.elements.map((el) => {
    let attrs = Object.entries(el.attrs)
    attrs = attrs.map(([k, v]) => {
      return `${k}="${v}"`
    }).join(" ")

    return { element: el.element, attrs }
  })

  return `<svg ${svgAttrs}>
${elements.map((el) => `  <${el.element} ${el.attrs}/>`).join("\n")}
</svg>`
}

const createJsFile = (framework, icon, subs, tags, data) => {
  // let type = subs.map((i) => toPascalCase(i))
  
  let svgAttrs = JSON.stringify(data.svgAttrs);

  let child = data.elements.map((el) => {
    return `h(
          "${el.element}",
          ${JSON.stringify(el.attrs)}
        )`
  })

  return `import { h } from 'vue'
export default {
  $_icon: {
    name: "${icon}",
    vendor: "${toPascalCase(options[framework].prefix)}",
    license: "${options[framework].license}",
    type: ${JSON.stringify(subs.map(i => i.charAt(0).toUpperCase() + i.slice(1)))},
    tags: ${JSON.stringify(tags)},
  },
  render() {
    return h(
      "svg",
      ${svgAttrs},
      [ 
        ${child.join(",\n        ")} 
      ]
    )
  }
}`;
};

let attrsList = ["id", "class", "xmlns:xlink", "version"];

let normalizeAttrs = (attrs, icon, framework) => {
  attrs.fill = options[framework].fill;
  // attrs["data-name"] = `${options[framework].prefix}-${icon}`;

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
    fs.rmdirSync(`dist-vue-${f}/icons`, { recursive: true });
    fs.rmdirSync(`dist-svg-${f}`, { recursive: true });
    // fs.rmSync(`dist-${f}/index.js`);
  });

  // bootstrap
  if (frameworks.includes("bootstrap")) {
    fs.mkdirSync("dist-vue-bootstrap/icons/", { recursive: true });
    fs.mkdirSync("dist-svg-bootstrap", { recursive: true });
  }

  // mdi
  if (frameworks.includes("mdi")) {
    fs.mkdirSync("dist-vue-mdi/icons/", { recursive: true });
    fs.mkdirSync("dist-svg-mdi", { recursive: true });
  }

  // heroicons
  if (frameworks.includes("heroicons")) {
    fs.mkdirSync("dist-vue-heroicons/icons/", { recursive: true });
    fs.mkdirSync("dist-svg-heroicons", { recursive: true });
  }

  // fontawesome
  if (frameworks.includes("fontawesome")) {
    fs.mkdirSync("dist-vue-fontawesome/icons/", { recursive: true });
    fs.mkdirSync("dist-svg-fontawesome", { recursive: true });
  }
};

let finalizeDist = (dist, index) => {
  fs.writeFileSync(path.join(dist, "index.js"), index);
};

const createComponents = (framework) => {
  const dist = "dist-vue-" + framework;
  const distSVG = "dist-svg-" + framework;

  let index = "";
  let count = 0;

  const parser = new XMLParser(parserOptions);

  const files = fg.sync(
    `icons/${framework}/${options[framework].dir}/**/*.svg`
  );

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
    const filenameSVG = icon + (subs.length ? "-" + subs.join("-") : "") + ".svg";
    let iconName = `${toPascalCase(options[framework].prefix)}${
      pascalIcon + subs.map((i) => toPascalCase(i)).join("")
    }`;

    const tags = icon.split("-");

    const content = fs.readFileSync(i, { encoding: "utf-8" });

    // parse SVG

    let parsedSvg = parser.parse(content);
    let data = getSvgData(parsedSvg[0]);
    normalizeAttrs(data.svgAttrs, icon, framework);

    // create JS file

    const fileJs = createJsFile(
      framework,
      pascalIcon,
      subs,
      tags,
      data,
    );

    const fileSVG = createSVGFile(framework, pascalIcon, subs, tags, data)

    // update index

    index += `export { default as ${iconName} } from "./icons/${filename}"\n`;

    // write JS file

    fs.writeFileSync(path.join(dist, "icons", filename), fileJs);
    fs.writeFileSync(path.join(distSVG, filenameSVG), fileSVG);

    count++;
  });

  finalizeDist(dist, index);

  console.log(`${framework} done (${count} icons)`);
};

handleCommandline();

let frameworks = getFrameworks();

prepareDist();

frameworks.forEach((f) => createComponents(f));
