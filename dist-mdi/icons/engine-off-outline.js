import { h } from 'vue'
export default {
  $_icon: {
    name: "EngineOffOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["engine","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-engine-off-outline"},
      [ 
        h(
          "path",
          {"d":"M2.5,3.77L6.87,8.14L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V19.27L21.23,22.5L22.5,21.22L3.78,2.5L2.5,3.77M16,18H11L9,16H7V11L8,10H8.73L16,17.27V18M23,9V19H22.82L16,12.18V10H13.82L7.82,4H15V6H12V8H18V12H20V9H23Z"}
        ) 
      ]
    )
  }
}