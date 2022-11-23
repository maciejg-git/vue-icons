import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPosStopOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","pos","stop","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 12H18V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V12C20 10.9 19.11 10 18 10H17V4H7V10H6C4.89 10 4 10.9 4 12V19H13C13 18.3 13.13 17.63 13.35 17H6V12M9 6H15V10H9V6M7 15V13H11V15H7M22 16V22H16V16H22Z"}
        ) 
      ]
    )
  }
}