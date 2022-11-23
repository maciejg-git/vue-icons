import { h } from 'vue'
export default {
  $_icon: {
    name: "L",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"}
        ) 
      ]
    )
  }
}