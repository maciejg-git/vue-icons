import { h } from 'vue'
export default {
  $_icon: {
    name: "UploadMultipleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["upload","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 8H15V14H9V8H5L12 1L19 8M14.17 6L12 3.83L9.83 6H11V12H13V6H14.17M5 16V18H19V16H5M19 20V22H5V20H19Z"}
        ) 
      ]
    )
  }
}