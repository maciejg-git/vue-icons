import { h } from 'vue'
export default {
  $_icon: {
    name: "Sigma",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sigma"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,6H8.83L14.83,12L8.83,18H18V20H6V18L12,12L6,6V4H18V6Z"}
        ) 
      ]
    )
  }
}