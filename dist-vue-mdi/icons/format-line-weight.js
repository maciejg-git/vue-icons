import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatLineWeight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","line","weight"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,17H21V15H3V17M3,20H21V19H3V20M3,13H21V10H3V13M3,4V8H21V4H3Z"}
        ) 
      ]
    )
  }
}