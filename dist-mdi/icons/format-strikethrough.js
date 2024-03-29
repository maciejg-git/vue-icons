import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatStrikethrough",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","strikethrough"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z"}
        ) 
      ]
    )
  }
}