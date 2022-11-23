import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeFloor1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","floor","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3L2,12H5V20H19V12H22L12,3M10,8H14V18H12V10H10V8Z"}
        ) 
      ]
    )
  }
}