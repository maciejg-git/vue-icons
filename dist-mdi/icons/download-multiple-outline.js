import { h } from 'vue'
export default {
  $_icon: {
    name: "DownloadMultipleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["download","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 14L19 7H15V1H9V7H5L12 14M12 11.17L9.83 9H11V3H13V9H14.17L12 11.17M5 16V18H19V16H5M5 22V20H19V22H5Z"}
        ) 
      ]
    )
  }
}