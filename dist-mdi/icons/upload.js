import { h } from 'vue'
export default {
  $_icon: {
    name: "Upload",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["upload"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}
        ) 
      ]
    )
  }
}