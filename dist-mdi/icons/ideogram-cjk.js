import { h } from 'vue'
export default {
  $_icon: {
    name: "IdeogramCjk",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ideogram","cjk"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 4V6H4V10H6V8H18V10H20V6H13V4M8 10V12H13.59L11.59 14H4V16H11V18H10V20H13V16H20V14H14.21L16 12.21V10Z"}
        ) 
      ]
    )
  }
}