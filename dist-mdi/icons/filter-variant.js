import { h } from 'vue'
export default {
  $_icon: {
    name: "FilterVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["filter","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"}
        ) 
      ]
    )
  }
}