import { h } from 'vue'
export default {
  $_icon: {
    name: "TelevisionPlay",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["television","play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,3H3C1.89,3 1,3.89 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5C23,3.89 22.1,3 21,3M21,17H3V5H21M16,11L9,15V7"}
        ) 
      ]
    )
  }
}