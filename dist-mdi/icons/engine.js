import { h } from 'vue'
export default {
  $_icon: {
    name: "Engine",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["engine"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,4V6H10V8H7L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z"}
        ) 
      ]
    )
  }
}