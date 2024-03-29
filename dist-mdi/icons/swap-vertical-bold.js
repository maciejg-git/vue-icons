import { h } from 'vue'
export default {
  $_icon: {
    name: "SwapVerticalBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["swap","vertical","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,8H11V14H6V8H3L8.5,2L14,8M15.5,22L21,16H18V10H13V16H10L15.5,22Z"}
        ) 
      ]
    )
  }
}