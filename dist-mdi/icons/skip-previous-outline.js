import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipPreviousOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","previous","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,6H8V18H6M9.5,12L18,18V6M16,14.14L12.97,12L16,9.86V14.14Z"}
        ) 
      ]
    )
  }
}