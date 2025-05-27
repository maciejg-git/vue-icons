import { h } from 'vue'
export default {
  $_icon: {
    name: "PineTreeVariantOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pine","tree","variant","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19M15.16 10H13.5L17.34 16H6.67L10.53 10H8.84L12 5.5L15.16 10Z"}
        ) 
      ]
    )
  }
}