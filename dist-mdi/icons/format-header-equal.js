import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHeaderEqual",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","header","equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,4H6V10H10V4H12V18H10V12H6V18H4V4M14,10V8H21V10H14M14,12H21V14H14V12Z"}
        ) 
      ]
    )
  }
}