import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF11",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","f11"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 7H9V9H5V11H8V13H5V17H3V7M11 7H15V17H13V9H11V7M17 7H21V17H19V9H17V7Z"}
        ) 
      ]
    )
  }
}