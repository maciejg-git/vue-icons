import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric1Box",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","1","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,17H12V9H10V7H14M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"}
        ) 
      ]
    )
  }
}