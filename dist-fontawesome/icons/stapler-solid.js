import { h } from 'vue'
export default {
  $_icon: {
    name: "Stapler",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["stapler"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M640 299.3l0 4.7 0 128c0 26.5-21.5 48-48 48l-80 0-64 0L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0 0-48L96 368c-17.7 0-32-14.3-32-32l0-116.6L33.8 214C14.2 210.5 0 193.5 0 173.7c0-8.9 2.9-17.5 8.2-24.6l35.6-47.5C76.7 57.8 128.2 32 182.9 32c27 0 53.6 6.3 77.8 18.4L586.9 213.5C619.5 229.7 640 263 640 299.3zM448 304l0-16L128 230.9l0 73.1 320 0z"}
        ) 
      ]
    )
  }
}