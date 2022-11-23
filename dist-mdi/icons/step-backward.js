import { h } from 'vue'
export default {
  $_icon: {
    name: "StepBackward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["step","backward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,5V19H16V5M14,5V19L3,12"}
        ) 
      ]
    )
  }
}