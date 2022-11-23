import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowBottomRightBoldBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","bottom","right","bold","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16 16H8.9L11 13.9L7 10L9.8 7.2L13.9 11.1L16 8.9V16M5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21M5 5H19V19H5V5Z"}
        ) 
      ]
    )
  }
}