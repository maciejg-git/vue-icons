import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareRounded",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","rounded"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"}
        ) 
      ]
    )
  }
}