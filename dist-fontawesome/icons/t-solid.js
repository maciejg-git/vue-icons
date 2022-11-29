import { h } from 'vue'
export default {
  $_icon: {
    name: "T",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["t"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H160V448c0 17.7 14.3 32 32 32s32-14.3 32-32V96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H192 32z"}
        ) 
      ]
    )
  }
}