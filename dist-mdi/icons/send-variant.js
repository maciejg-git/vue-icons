import { h } from 'vue'
export default {
  $_icon: {
    name: "SendVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["send","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 20V14L11 12L3 10V4L22 12Z"}
        ) 
      ]
    )
  }
}