import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipForward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12"}
        ) 
      ]
    )
  }
}