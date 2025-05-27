import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatPilcrowArrowRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","pilcrow","arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9A4,4 0 0,0 5,6A4,4 0 0,0 9,10Z"}
        ) 
      ]
    )
  }
}