import { h } from 'vue'
export default {
  $_icon: {
    name: "Resize",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["resize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.59,12L14.59,8H11V6H18V13H16V9.41L12,13.41V16H20V4H8V12H10.59M22,2V18H12V22H2V12H6V2H22M10,14H4V20H10V14Z"}
        ) 
      ]
    )
  }
}