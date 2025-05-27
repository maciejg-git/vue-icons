import { h } from 'vue'
export default {
  $_icon: {
    name: "ExclamationThick",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["exclamation","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10 3H14V14H10V3M10 21V17H14V21H10Z"}
        ) 
      ]
    )
  }
}