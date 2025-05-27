import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatFloatNone",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","float","none"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z"}
        ) 
      ]
    )
  }
}