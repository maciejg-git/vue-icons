import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveArrowUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["archive","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 21H20V8H4M14 15V18H10V15H7L12 10L17 15M3 3H21V7H3"}
        ) 
      ]
    )
  }
}