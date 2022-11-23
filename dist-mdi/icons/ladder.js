import { h } from 'vue'
export default {
  $_icon: {
    name: "Ladder",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ladder"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 1V3H10V1H8V22H10V20H14V22H16V1H14M14 5V8H10V5H14M14 10V13H10V10H14M10 18V15H14V18H10Z"}
        ) 
      ]
    )
  }
}