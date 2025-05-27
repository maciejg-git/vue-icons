import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHorizontalAlignCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","horizontal","align","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,16V13H23V11H19V8L15,12L19,16M5,8V11H1V13H5V16L9,12L5,8M11,20H13V4H11V20Z"}
        ) 
      ]
    )
  }
}