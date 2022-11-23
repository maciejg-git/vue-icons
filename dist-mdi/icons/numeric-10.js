import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric10",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","10"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10 7H6V9H8V17H10V7M16 7H14C12.9 7 12 7.9 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9C18 7.9 17.11 7 16 7M16 15H14V9H16V15Z"}
        ) 
      ]
    )
  }
}