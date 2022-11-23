import { h } from 'vue'
export default {
  $_icon: {
    name: "SelectArrowUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["select","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 3H5V5H3V4C3 3.4 3.4 3 4 3M20 3C20.6 3 21 3.4 21 4V5H19V3H20M15 5V3H17V5H15M11 5V3H13V5H11M7 5V3H9V5H7M11 21V19H13V21H11M7 21V19H9V21H7M4 21C3.4 21 3 20.6 3 20V19H5V21H4M3 15H5V17H3V15M3 11H5V13H3V11M21 11V13H19V11H21M3 7H5V9H3V7M21 7V9H19V7H21M19 15L16 18H18V22H20V18H22L19 15Z"}
        ) 
      ]
    )
  }
}