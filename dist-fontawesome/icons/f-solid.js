import { h } from 'vue'
export default {
  $_icon: {
    name: "F",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["f"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 32C28.7 32 0 60.7 0 96L0 256 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 224 64 96l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32z"}
        ) 
      ]
    )
  }
}