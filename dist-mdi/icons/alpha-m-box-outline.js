import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaMBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","m","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}