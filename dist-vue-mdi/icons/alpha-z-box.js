import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaZBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","z","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V9H13L9,15V17H15V15H11L15,9V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}
        ) 
      ]
    )
  }
}