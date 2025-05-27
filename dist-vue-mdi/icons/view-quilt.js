import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewQuilt",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","quilt"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,5V11H21V5M16,18H21V12H16M4,18H9V5H4M10,18H15V12H10V18Z"}
        ) 
      ]
    )
  }
}