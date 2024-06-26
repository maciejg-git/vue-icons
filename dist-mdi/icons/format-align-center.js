import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","align","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}