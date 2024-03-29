import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewStreamOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","stream","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 6V18H21V6H4M19 16H6V13H19V16M6 11V8H19V11H6Z"}
        ) 
      ]
    )
  }
}