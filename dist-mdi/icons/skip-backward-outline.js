import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipBackwardOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","backward","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,14.17L15.83,12L18,9.83V14.17M20,19V5L13,12M4,19H6V5H4M11,14.17L8.83,12L11,9.83V14.17M13,19V5L6,12"}
        ) 
      ]
    )
  }
}