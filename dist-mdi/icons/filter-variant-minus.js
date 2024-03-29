import { h } from 'vue'
export default {
  $_icon: {
    name: "FilterVariantMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["filter","variant","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M23 18H15V20H23V18Z"}
        ) 
      ]
    )
  }
}