import { h } from 'vue'
export default {
  $_icon: {
    name: "Segment",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["segment"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9"}
        ) 
      ]
    )
  }
}