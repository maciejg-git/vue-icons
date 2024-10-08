import { h } from 'vue'
export default {
  $_icon: {
    name: "AppleKeyboardOption",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["apple","keyboard","option"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z"}
        ) 
      ]
    )
  }
}