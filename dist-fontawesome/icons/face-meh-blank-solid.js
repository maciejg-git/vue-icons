import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceMehBlank",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["face","meh","blank"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM208.4 208c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm128 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"}
        ) 
      ]
    )
  }
}