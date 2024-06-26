import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatPilcrowArrowLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","pilcrow","arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10A4,4 0 0,0 6,6A4,4 0 0,0 10,10Z"}
        ) 
      ]
    )
  }
}