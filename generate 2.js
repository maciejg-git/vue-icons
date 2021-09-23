const fs = require("fs");
const path = require("path");

const options = {
  bootstrap: {
    class: "b-icon",
    fill: "currentColor",
  },
  mdi: {
    class: "mdi-icon",
    fill: "currentColor",
  },
  fa: {
    class: "fa-icon",
    fill: "currentColor",
  },
  test: {
    class: "fa-icon",
    fill: "currentColor",
  },
};

const toCamelCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const toPascalCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const vendorPrefix = (framework, pascal) => {
  let vendor = framework;
  if (vendor == "bootstrap") vendor = "b";
  if (vendor == "fontawesome") vendor = "fa";
  vendor = pascal ? toPascalCase(vendor) : vendor;
  return vendor;
};

let createRenderFunction = (attrs) => {
  return `render() {
    return h(
      "svg",
      ${attrs},
    )
  }`;
};

const createJsFile = (icon, renderFunction, framework) => {
  return `import { h } from 'vue'
export default {
  name: "${icon}",
  vendor: "${vendorPrefix(framework, true)}",
  ${renderFunction}
}`;
};

let svgTagRx = /<svg ([\s\S]*?)>/m;
let svgInnerRx = /<svg.*?>([\s\S]*?)<\/svg>/m;
let svgCommentsRx = /<!--.*?-->/m;

let removeComments = (str) => {
  return str.replace(svgCommentsRx, "")
}

let unpackAttrs = (attrs) => {
  return Object.fromEntries(attrs);
}

let packAttrs = (attrs) => {
  return JSON.stringify(attrs);
}

let getInner = (svg) => {
  let str = svg.match(svgInnerRx)[1]
  return str.replace(/\n/g, "").replace(/"/g, "'")
}

let normalizeAttrs = (attrs, icon, framework) => {
  attrs.class = options[framework].class;
  attrs.fill = options[framework].fill;
  attrs["data-name"] = `${vendorPrefix(framework, false)}-${icon}`;
  if (attrs.id) delete attrs.id;
  if (attrs["xmlns:xlink"]) delete attrs["xmlns:xlink"];
  if (attrs.version) delete attrs.version;
}

let parseSvg = (str, icon, framework) => {
  let str2 = removeComments(str)

  let svgTag= str2.match(svgTagRx)[1];

  let inner = getInner(str2);

  let attrsArray = svgTag.match(/(?:[^\s"]+|"[^"]*")+/g);
  attrsArray = attrsArray.map((attr) => {
    return attr.replace(/"/g, "").split("=");
  });

  attrs = unpackAttrs(attrsArray);
  normalizeAttrs(attrs, inner, icon, framework)
  attrs.innerHTML = inner;
  attrs = packAttrs(attrs)

  return {
    attrs,
    inner,
  };
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

const prepareDist = () => {
  fs.rmdirSync("dist-bootstrap/", { recursive: true });
  fs.rmdirSync("dist-mdi/", { recursive: true });
  fs.rmdirSync("dist-fa/", { recursive: true });

  fs.mkdirSync("dist-bootstrap/");
  fs.mkdirSync("dist-bootstrap/bootstrap/");

  fs.mkdirSync("dist-mdi/");
  fs.mkdirSync("dist-mdi/mdi/");

  fs.mkdirSync("dist-fa/");
  fs.mkdirSync("dist-fa/fa/");
  fs.mkdirSync("dist-fa/fa/brands");
  fs.mkdirSync("dist-fa/fa/regular");
  fs.mkdirSync("dist-fa/fa/solid");
};

const createComponents = (framework) => {
  const source = path.join("icons", framework);
  const dist = "dist-" + framework;

  const files = getFiles(source);

  let index = "";

  files.forEach((i) => {
    const file = i[i.length - 1];
    const sub = i.length > 3 ? i[i.length - 2] : "";

    const icon = file.substr(0, file.lastIndexOf("."));
    const camelIcon = toCamelCase(icon);
    const pascalIcon = toPascalCase(camelIcon);
    const filename = icon + ".js";

    const content = fs.readFileSync(path.join(source, sub, file), {
      encoding: "utf-8",
    });

    let { attrs, inner } = parseSvg(content, icon, framework);

    const renderFunction = createRenderFunction(attrs, inner);

    const fileJs = createJsFile(pascalIcon, renderFunction, framework);
    console.log(fileJs)

    index += `export { default as ${pascalIcon}Icon } from "./${framework}${
      sub ? "/" + sub : ""
    }/${filename}"\n`;

    fs.writeFileSync(path.join(dist, framework, sub, filename), fileJs);
  });
  fs.writeFileSync(path.join(dist, "index.js"), index);
  console.log(framework, "done");
};

// prepareDist();

createComponents("test");

// createComponents("bootstrap");
// createComponents("mdi");
// createComponents("fa");
// createComponents("phosphor");
