import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopLeftThick",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","left","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.12,11.94V16.89H5.69V5.69H16.89V9.12H11.94L18.31,15.5L15.5,18.31L9.12,11.94Z"}
        ) 
      ]
    )
  }
}