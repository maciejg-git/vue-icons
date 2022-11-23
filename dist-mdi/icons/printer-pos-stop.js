import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterPosStop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","pos","stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 9H7V4H17V9M19 13C15.69 13 13 15.69 13 19H4V12C4 10.9 4.89 10 6 10H18C19.11 10 20 10.9 20 12V13.09C19.67 13.04 19.34 13 19 13M10 12H6V14H10V12M16 16V22H22V16H16Z"}
        ) 
      ]
    )
  }
}