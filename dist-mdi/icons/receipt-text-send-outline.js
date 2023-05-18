import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptTextSendOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["receipt","text","send","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22V19.09H5V4.91H19V13.26L21 14.26V2L19.5 3.5M14 23V19L18 18L14 17V13L24 18L14 23M12 11V13H6V11H12M6 17V15H12V17H6M18 7V9H6V7H18Z"}
        ) 
      ]
    )
  }
}