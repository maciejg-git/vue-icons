import { h } from 'vue'
export default {
  $_icon: {
    name: "DownloadNetwork",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["download","network"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,3A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7C5.89,17 5,16.1 5,15V5A2,2 0 0,1 7,3H17M12,14.5L16.5,10H13V6H11V10H7.5L12,14.5Z"}
        ) 
      ]
    )
  }
}