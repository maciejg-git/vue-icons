import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipPrevious",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","previous"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"}
        ) 
      ]
    )
  }
}