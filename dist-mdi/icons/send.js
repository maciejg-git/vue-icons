import { h } from 'vue'
export default {
  $_icon: {
    name: "Send",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["send"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,21L23,12L2,3V10L17,12L2,14V21Z"}
        ) 
      ]
    )
  }
}