import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPosPlayOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","pos","play","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 15V13H11V15H7M6 17H13.35C13.13 17.63 13 18.3 13 19H4V12C4 10.9 4.89 10 6 10H7V4H17V10H18C19.11 10 20 10.9 20 12V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V12H6V17M9 10H15V6H9V10M17 16V22L22 19L17 16Z"}
        ) 
      ]
    )
  }
}