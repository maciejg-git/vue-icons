import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeFloorNegative1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","floor","negative","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22L12,3M11,15H7V13H11V15M15,18H13V10H11V8H15V18Z"}
        ) 
      ]
    )
  }
}