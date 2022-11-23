import { h } from 'vue'
export default {
  $_icon: {
    name: "StepForward2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["step","forward","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,5H10V19H7V5M12,5L23,12L12,19V5M2,5H5V19H2V5Z"}
        ) 
      ]
    )
  }
}