import { h } from 'vue'
export default {
  $_icon: {
    name: "StepBackward2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["step","backward","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z"}
        ) 
      ]
    )
  }
}