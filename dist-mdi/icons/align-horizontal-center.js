import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignHorizontalCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["align","horizontal","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 2H13V7H21V10H13V14H18V17H13V22H11V17H6V14H11V10H3V7H11V2Z"}
        ) 
      ]
    )
  }
}