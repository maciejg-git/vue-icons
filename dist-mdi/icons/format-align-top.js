import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatAlignTop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","align","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,15L15.5,17.5L16.92,16.08L12,11.16L7.08,16.08L8.5,17.5L11,15V21H13V15M3,3H21V5H3V3M3,7H13V9H3V7Z"}
        ) 
      ]
    )
  }
}