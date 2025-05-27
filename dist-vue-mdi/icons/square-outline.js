import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V21H3V3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}