import { h } from 'vue'
export default {
  $_icon: {
    name: "Routes",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["routes"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,10H5L3,8L5,6H11V3L12,2L13,3V4H19L21,6L19,8H13V10H19L21,12L19,14H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V10Z"}
        ) 
      ]
    )
  }
}