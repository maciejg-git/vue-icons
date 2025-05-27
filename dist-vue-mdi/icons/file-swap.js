import { h } from 'vue'
export default {
  $_icon: {
    name: "FileSwap",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","swap"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8M14 18V16H10V18L7 15L10 12V14H14V12L17 15M13 9V3.5L18.5 9Z"}
        ) 
      ]
    )
  }
}