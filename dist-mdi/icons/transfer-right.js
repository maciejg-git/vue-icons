import { h } from 'vue'
export default {
  $_icon: {
    name: "TransferRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["transfer","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,8H5V16H3V8M7,8H9V16H7V8M11,8H13V16H11V8M15,19.25V4.75L22.25,12L15,19.25Z"}
        ) 
      ]
    )
  }
}