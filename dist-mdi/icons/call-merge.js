import { h } from 'vue'
export default {
  $_icon: {
    name: "CallMerge",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["call","merge"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,20.41L18.41,19L15,15.59L13.59,17M7.5,8H11V13.59L5.59,19L7,20.41L13,14.41V8H16.5L12,3.5"}
        ) 
      ]
    )
  }
}