import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownThick",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,4H14V13L17.5,9.5L19.92,11.92L12,19.84L4.08,11.92L6.5,9.5L10,13V4Z"}
        ) 
      ]
    )
  }
}