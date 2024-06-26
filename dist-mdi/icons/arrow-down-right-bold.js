import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownRightBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","right","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.5 3C14.64 3 18 6.36 18 10.5V13H22L16 20L10 13H14V10.5C14 8.57 12.43 7 10.5 7H3V3H10.5Z"}
        ) 
      ]
    )
  }
}