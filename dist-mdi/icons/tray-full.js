import { h } from 'vue'
export default {
  $_icon: {
    name: "TrayFull",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tray","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 5H6V7H18M6 9H18V11H6M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M18 13H6V15H18Z"}
        ) 
      ]
    )
  }
}