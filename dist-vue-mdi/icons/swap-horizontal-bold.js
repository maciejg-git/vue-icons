import { h } from 'vue'
export default {
  $_icon: {
    name: "SwapHorizontalBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["swap","horizontal","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,10V13H14V18H8V21L2,15.5L8,10M22,8.5L16,3V6H10V11H16V14L22,8.5Z"}
        ) 
      ]
    )
  }
}