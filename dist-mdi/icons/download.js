import { h } from 'vue'
export default {
  $_icon: {
    name: "Download",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["download"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}
        ) 
      ]
    )
  }
}