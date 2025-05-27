import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTitle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","title"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,4V7H10.5V19H13.5V7H19V4H5Z"}
        ) 
      ]
    )
  }
}