import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatWrapTopBottom",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","wrap","top","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,7L17,17H7L12,7M3,3H21V5H3V3M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}