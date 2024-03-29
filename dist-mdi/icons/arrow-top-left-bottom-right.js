import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopLeftBottomRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","left","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z"}
        ) 
      ]
    )
  }
}