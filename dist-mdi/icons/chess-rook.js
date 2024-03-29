import { h } from 'vue'
export default {
  $_icon: {
    name: "ChessRook",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chess","rook"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,20H19V22H5V20M17,2V5H15V2H13V5H11V2H9V5H7V2H5V8H7V18H17V8H19V2H17Z"}
        ) 
      ]
    )
  }
}