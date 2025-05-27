import { h } from 'vue'
export default {
  $_icon: {
    name: "InformationSlabSymbol",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["information","slab","symbol"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 9H11V7H13V9M14 15V17H10V15H11V13H10V11H13V15H14Z"}
        ) 
      ]
    )
  }
}