import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipBackward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","backward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12"}
        ) 
      ]
    )
  }
}