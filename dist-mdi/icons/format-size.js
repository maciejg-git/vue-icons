import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatSize",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","size"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z"}
        ) 
      ]
    )
  }
}