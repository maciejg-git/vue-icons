import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaKBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","k","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"}
        ) 
      ]
    )
  }
}