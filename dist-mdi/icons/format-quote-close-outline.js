import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatQuoteCloseOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","quote","close","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 6V14H14.88L12.88 18H18.62L21 13.24V6M15 8H19V12.76L17.38 16H16.12L18.12 12H15M3 6V14H4.88L2.88 18H8.62L11 13.24V6M5 8H9V12.76L7.38 16H6.12L8.12 12H5Z"}
        ) 
      ]
    )
  }
}