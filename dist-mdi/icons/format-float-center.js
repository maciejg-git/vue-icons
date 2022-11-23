import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatFloatCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","float","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7H15V13H9V7M3,3H21V5H3V3M3,15H21V17H3V15M3,19H17V21H3V19Z"}
        ) 
      ]
    )
  }
}