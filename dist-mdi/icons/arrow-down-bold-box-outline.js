import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownBoldBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","bold","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,17L7,12H10V8H14V12H17L12,17M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}