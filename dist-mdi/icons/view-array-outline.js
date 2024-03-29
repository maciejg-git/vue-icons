import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewArrayOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","array","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 7V16H10V7H15M21 5H18V18H21V5M17 5H8V18H17V5M7 5H4V18H7V5Z"}
        ) 
      ]
    )
  }
}