import { h } from 'vue'
export default {
  $_icon: {
    name: "EngineOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["engine","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3.78,2.5L21.5,20.22L20.23,21.5L18,19.27V20H10L8,18H5V15H3V18H1V10H3V13H5V10L6.87,8.14L2.5,3.77L3.78,2.5M20,9V12H18V8H12V6H15V4H7.82L22.82,19H23V9H20Z"}
        ) 
      ]
    )
  }
}