import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorRadius",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","radius"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,4H4V2H10V4A10,10 0 0,1 20,14H22V20H20V22H18V20H16V14H18A8,8 0 0,0 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z"}
        ) 
      ]
    )
  }
}