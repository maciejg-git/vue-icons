import { h } from 'vue'
export default {
  $_icon: {
    name: "UploadOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["upload","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,10V16H15V10H19L12,3L5,10H9M12,5.8L14.2,8H13V14H11V8H9.8L12,5.8M19,18H5V20H19V18Z"}
        ) 
      ]
    )
  }
}