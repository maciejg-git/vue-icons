import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric7",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","7"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,17L15,9V7H9V9H13L9,17"}
        ) 
      ]
    )
  }
}