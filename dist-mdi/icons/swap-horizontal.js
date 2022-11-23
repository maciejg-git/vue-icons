import { h } from 'vue'
export default {
  $_icon: {
    name: "SwapHorizontal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["swap","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z"}
        ) 
      ]
    )
  }
}