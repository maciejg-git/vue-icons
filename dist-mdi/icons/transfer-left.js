import { h } from 'vue'
export default {
  $_icon: {
    name: "TransferLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["transfer","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,16H19V8H21V16M17,16H15V8H17V16M13,16H11V8H13V16M9,5V19L2,12L9,5Z"}
        ) 
      ]
    )
  }
}