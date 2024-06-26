import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["plus","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,4V9H6V11H11V16H13V11H18V9H13V4H11M6,18V20H18V18H6Z"}
        ) 
      ]
    )
  }
}