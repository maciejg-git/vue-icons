import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpThick",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"}
        ) 
      ]
    )
  }
}