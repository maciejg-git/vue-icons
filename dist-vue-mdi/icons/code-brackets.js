import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeBrackets",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["code","brackets"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z"}
        ) 
      ]
    )
  }
}