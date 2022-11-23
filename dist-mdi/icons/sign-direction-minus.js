import { h } from 'vue'
export default {
  $_icon: {
    name: "SignDirectionMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sign","direction","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20.5 9.5L18 12H13V22H9A2 2 0 0 1 11 20V12H3.5L6 9.5L3.5 7H11V3L12 2L13 3V7H18M23 18H15V20H23Z"}
        ) 
      ]
    )
  }
}