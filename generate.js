const parser = require("fast-xml-parser");
const fs = require("fs");
const path = require("path");

const xmlOptions = {
  attributeNamePrefix: "",
  attrNodeName: "attr",
  ignoreAttributes: false,
  parseAttributeValue: false,
  arrayMode: false,
};

const options = {
  bootstrap: {
    class: "b-icon",
  },
  mdi: {
    class: "mdi-icon",
  },
  fa: {
    class: "fa-icon",
  },
};

let stringifyObject = (str) => {
  let s = [];
  for (const [key, value] of Object.entries(str)) {
    s.push(`"${key}": "${value}"`);
  }
  return s.join(",");
};

let toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
let toPascalCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

let vendorName = (framework) => {
  let vendor = framework;
  if (vendor == "bootstrap") vendor = "b";
  if (vendor == "fontawesome") vendor = "fa";
  return toPascalCase(vendor);
};

let createRenderFunction = (svg, svgAttrs, elements) => {
  let svgAttr = stringifyObject(svgAttrs);

  let child = [];

  for (let el in elements) {
    let childAttrs = elements[el].map((p) => {
      return `h("${el}", { ${stringifyObject(p)} })`;
    });
    child.push(childAttrs);
  }

  return `render() {
    return h(
      "svg",
      { ${svgAttr} },
      [ ${child.join(",")} ]
    )
  }`;
};

let createJsFile = (icon, renderFunction, framework) => {
  return `import { h } from 'vue'
export default {
  name: "${icon}",
  vendor: "${vendorName(framework)}",
  ${renderFunction}
}`;
};

let getSvgData = (parsed) => {
  let svg = parsed.child.svg[0];
  let svgAttrs = svg.attrsMap.attr;
  let elements = {};

  for (let el in svg.child) {
    elements[el] = svg.child[el].map((p) => {
      return p.attrsMap.attr;
    });
  }

  return { svg, svgAttrs, elements };
};

let setSvgAttrs = (svgAttrs, framework) => {
  svgAttrs.class = options[framework].class;
};

let prepareDist = () => {
  fs.rmdirSync("dist-bootstrap/", { recursive: true });
  fs.rmdirSync("dist-mdi/", { recursive: true });
  fs.rmdirSync("dist-fa/", { recursive: true });

  fs.mkdirSync("dist-bootstrap/");
  fs.mkdirSync("dist-bootstrap/bootstrap/");
  fs.mkdirSync("dist-bootstrap/vue/");

  fs.mkdirSync("dist-mdi/");
  fs.mkdirSync("dist-mdi/mdi/");
  fs.mkdirSync("dist-mdi/vue/");

  fs.mkdirSync("dist-fa/");
  fs.mkdirSync("dist-fa/fa/");
  fs.mkdirSync("dist-fa/fa/brands");
  fs.mkdirSync("dist-fa/fa/regular");
  fs.mkdirSync("dist-fa/fa/solid");
  fs.mkdirSync("dist-fa/vue/");
};

const getFiles = (directory) => {
  let files = [];

  const getFilesRecursively = (directory) => {
    const filesInDirectory = fs.readdirSync(directory);
    for (const file of filesInDirectory) {
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

let createComponents = (framework) => {
  let source = path.join("icons", framework);
  let dist = "dist-" + framework;

  let files = getFiles(source);

  let index = "";

  files.forEach((i) => {
    let file = i[i.length - 1];
    let sub = i.length > 3 ? i[i.length - 2] : "";

    let icon = file.substr(0, file.lastIndexOf("."));
    let camelIcon = toCamelCase(icon);
    let pascalIcon = toPascalCase(camelIcon);
    let filename = icon + ".js";

    let content = fs.readFileSync(path.join(source, sub, file), {
      encoding: "utf-8",
    });

    let parsed = parser.getTraversalObj(content, xmlOptions);

    let { svg, svgAttrs, elements } = getSvgData(parsed);

    setSvgAttrs(svgAttrs, framework);

    let renderFunction = createRenderFunction(svg, svgAttrs, elements);

    let fileJs = createJsFile(pascalIcon, renderFunction, framework);

    index += `export { default as ${pascalIcon}Icon } from "./${framework}${sub ? "/" + sub : ""}/${filename}"\n`;

    fs.writeFileSync(
      path.join(dist, framework, sub, filename),
      fileJs
    );
  });
  fs.writeFileSync(path.join(dist, "index.js"), index);
  fs.appendFileSync(
    path.join(dist, "index.js"),
    "export { default } from './vue/registerIcon'\n"
  );
  fs.copyFileSync(
    path.join("vue", "Icon.vue"),
    path.join(dist, "vue", "Icon.vue")
  );
  fs.copyFileSync(
    path.join("vue", "registerIcon.js"),
    path.join(dist, "vue", "registerIcon.js")
  );
  fs.copyFileSync(
    path.join("package", "package-" + framework + ".json"),
    path.join(dist, "package.json")
  );
};

prepareDist();

createComponents("bootstrap");
createComponents("mdi");
createComponents("fa");
