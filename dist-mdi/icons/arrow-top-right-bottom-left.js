import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRightBottomLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","right","bottom","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,21H3V13H5V17.59L17.59,5H13V3H21V11H19V6.41L6.41,19H11V21Z"}
        ) 
      ]
    )
  }
}