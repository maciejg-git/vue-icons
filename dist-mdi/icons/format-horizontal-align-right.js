import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatHorizontalAlignRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","horizontal","align","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z"}
        ) 
      ]
    )
  }
}