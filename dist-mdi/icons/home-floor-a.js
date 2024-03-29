import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeFloorA",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","floor","a"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22L12,3M11,8H13A2,2 0 0,1 15,10V18H13V15H11V18H9V10C9,8.89 9.9,8 11,8M11,10V13H13V10H11Z"}
        ) 
      ]
    )
  }
}