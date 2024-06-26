import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorSquareOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","square","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 4H6V6H4V4M6 20H4V18H6V20M18 8V16H16V18H8V16H6V8H8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22V2H16V8H18M20 20H18V18H20V20M18 6V4H20V6H18Z"}
        ) 
      ]
    )
  }
}