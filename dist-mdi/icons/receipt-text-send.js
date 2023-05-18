import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptTextSend",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["receipt","text","send"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4.5 20.5L3 22V2L4.5 3.5L6 2L7.5 3.5L9 2L10.5 3.5L12 2L13.5 3.5L15 2L16.5 3.5L18 2L19.5 3.5L21 2V14.26L18 12.76V11H6V13H12V15H6V17H12V22L10.5 20.5L9 22L7.5 20.5L6 22L4.5 20.5M6 7V9H18V7H6M14 13L24 18L14 23V19L18 18L14 17V13Z"}
        ) 
      ]
    )
  }
}