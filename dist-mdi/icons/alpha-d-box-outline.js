import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaDBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","d","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H9V7M11,9V15H13V9H11M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}