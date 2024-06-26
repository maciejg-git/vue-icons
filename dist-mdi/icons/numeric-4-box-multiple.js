import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric4BoxMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","4","box","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17A2,2 0 0,1 21,19H7A2,2 0 0,1 5,17V3A2,2 0 0,1 7,1H21M15,15H17V5H15V9H13V5H11V11H15V15Z"}
        ) 
      ]
    )
  }
}