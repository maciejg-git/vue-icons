import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptTextArrowLeftOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["receipt","text","arrow","left","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 22L13.26 20.74C13.1 20.22 13 19.66 13 19.09H5V4.91H19V13C19.7 13 20.37 13.13 21 13.35V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22M13.35 17C13.61 16.25 14 15.58 14.54 15H6V17H13.35M18 11H6V13H18V11M18 7H6V9H18V7M18 20V22L15 19L18 16V18H22V20H18Z"}
        ) 
      ]
    )
  }
}