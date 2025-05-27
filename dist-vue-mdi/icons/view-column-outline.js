import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewColumnOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","column","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z"}
        ) 
      ]
    )
  }
}