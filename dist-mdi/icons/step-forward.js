import { h } from 'vue'
export default {
  $_icon: {
    name: "StepForward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["step","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,5V19H8V5M10,5V19L21,12"}
        ) 
      ]
    )
  }
}