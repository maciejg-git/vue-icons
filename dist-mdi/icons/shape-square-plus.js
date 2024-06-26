import { h } from 'vue'
export default {
  $_icon: {
    name: "ShapeSquarePlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shape","square","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,5H22V7H19V10H17V7H14V5H17V2H19V5M17,19V13H19V21H3V5H11V7H5V19H17Z"}
        ) 
      ]
    )
  }
}