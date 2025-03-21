import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewList",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","list"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"}
        ) 
      ]
    )
  }
}