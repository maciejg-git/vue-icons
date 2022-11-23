import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatLetterSpacingVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","letter","spacing","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 3V21H20V3H22M4 3V21H2V3H4M10 13.7H14L12 8.3L10 13.7M11.2 6H12.9L17.6 18H15.6L14.7 15.4H9.4L8.5 18H6.5L11.2 6Z"}
        ) 
      ]
    )
  }
}