import { h } from 'vue'
export default {
  name: "PencilRuler",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 512 512","class": "fa-icon" },
      [ h("path", { "d": "M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z" }) ]
    )
  }
}