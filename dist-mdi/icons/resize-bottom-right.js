import { h } from 'vue'
export default {
  $_icon: {
    name: "ResizeBottomRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["resize","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,22H20V20H22V22M22,18H20V16H22V18M18,22H16V20H18V22M18,18H16V16H18V18M14,22H12V20H14V22M22,14H20V12H22V14Z"}
        ) 
      ]
    )
  }
}