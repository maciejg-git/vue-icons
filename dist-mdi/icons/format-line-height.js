import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatLineHeight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","line","height"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-format-line-height"},
      [ 
        h(
          "path",
          {"d":"M21 22H3V20H21V22M21 4H3V2H21V4M10 13.7H14L12 8.3L10 13.7M11.2 6H12.9L17.6 18H15.6L14.7 15.4H9.4L8.5 18H6.5L11.2 6Z"}
        ) 
      ]
    )
  }
}