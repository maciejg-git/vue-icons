import { h } from 'vue'
export default {
  $_icon: {
    name: "DivingScubaFlag",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["diving","scuba","flag"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,6L19,20H2V6M5,4L22,18V4H5Z"}
        ) 
      ]
    )
  }
}