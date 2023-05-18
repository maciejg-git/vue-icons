import { h } from 'vue'
export default {
  $_icon: {
    name: "PineTreeVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pine","tree","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19Z"}
        ) 
      ]
    )
  }
}