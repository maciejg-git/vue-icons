import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomLeftThick",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","bottom","left","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15.5,5.69L18.31,8.5L11.94,14.89H16.89V18.31H5.69V7.11H9.12V12.06L15.5,5.69Z"}
        ) 
      ]
    )
  }
}