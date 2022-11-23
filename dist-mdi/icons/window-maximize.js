import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMaximize",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["window","maximize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,4H20V20H4V4M6,8V18H18V8H6Z"}
        ) 
      ]
    )
  }
}