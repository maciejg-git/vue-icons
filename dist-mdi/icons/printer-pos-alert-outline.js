import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPosAlertOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","pos","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 15H11V13H15V15M18 12V19H2V12C2 10.9 2.9 10 4 10H5V4H15V10H16C17.11 10 18 10.9 18 12M7 10H13V6H7V10M16 12H4V17H16V12M20 17H22V15H20V17M20 7V13H22V7H20Z"}
        ) 
      ]
    )
  }
}