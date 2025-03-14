import { h } from 'vue'
export default {
  $_icon: {
    name: "Emby",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["emby"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,2L6,7L7,8L2,13L7,18L8,17L13,22L18,17L17,16L22,11L17,6L16,7L11,2M10,8.5L16,12L10,15.5V8.5Z"}
        ) 
      ]
    )
  }
}