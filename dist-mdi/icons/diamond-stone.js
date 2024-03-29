import { h } from 'vue'
export default {
  $_icon: {
    name: "DiamondStone",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["diamond","stone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z"}
        ) 
      ]
    )
  }
}