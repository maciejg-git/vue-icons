import { h } from 'vue'
export default {
  $_icon: {
    name: "Stairs",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["stairs"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z"}
        ) 
      ]
    )
  }
}