import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaIBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","i","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,7H10V9H11V15H10V17H14V15H13V9H14V7M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}
        ) 
      ]
    )
  }
}