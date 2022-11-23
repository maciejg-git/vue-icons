import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"}
        ) 
      ]
    )
  }
}