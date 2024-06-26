import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHorizontalAlignLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","horizontal","align","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z"}
        ) 
      ]
    )
  }
}