import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewStream",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","stream"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,5V11H21V5M4,18H21V12H4V18Z"}
        ) 
      ]
    )
  }
}