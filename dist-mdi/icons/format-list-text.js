import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatListText",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","list","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"}
        ) 
      ]
    )
  }
}