import { h } from 'vue'
export default {
  $_icon: {
    name: "O",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["o"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z"}
        ) 
      ]
    )
  }
}