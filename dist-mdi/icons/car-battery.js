import { h } from 'vue'
export default {
  $_icon: {
    name: "CarBattery",
    vendor: "Mdi",
    type: [],
    tags: ["car","battery"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-car-battery"},
      [ 
        h(
          "path",
          {"d":"M4,3V6H1V20H23V6H20V3H14V6H10V3H4M3,8H21V18H3V8M15,10V12H13V14H15V16H17V14H19V12H17V10H15M5,12V14H11V12H5Z"}
        ) 
      ]
    )
  }
}