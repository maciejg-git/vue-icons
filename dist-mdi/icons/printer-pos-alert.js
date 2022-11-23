import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPosAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","pos","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16 10H4C2.9 10 2 10.9 2 12V19H18V12C18 10.9 17.11 10 16 10M16 14H12V12H16V14M15 9H5V4H15V9M22 7V13H20V7H22M20 15H22V17H20V15Z"}
        ) 
      ]
    )
  }
}