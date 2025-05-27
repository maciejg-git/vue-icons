import { h } from 'vue'
export default {
  $_icon: {
    name: "SwapVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["swap","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z"}
        ) 
      ]
    )
  }
}