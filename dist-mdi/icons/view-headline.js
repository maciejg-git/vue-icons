import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewHeadline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","headline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z"}
        ) 
      ]
    )
  }
}