import { h } from 'vue'
export default {
  $_icon: {
    name: "L",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 32c17.7 0 32 14.3 32 32l0 352 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32z"}
        ) 
      ]
    )
  }
}