import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowRestore",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["window","restore"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z"}
        ) 
      ]
    )
  }
}