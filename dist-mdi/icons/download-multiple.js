import { h } from 'vue'
export default {
  $_icon: {
    name: "DownloadMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["download","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z"}
        ) 
      ]
    )
  }
}