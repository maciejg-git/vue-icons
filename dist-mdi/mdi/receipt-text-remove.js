import { h } from 'vue'
export default {
  $_icon: {
    name: "ReceiptTextRemove",
    vendor: "Mdi",
    type: "",
    tags: ["receipt","text","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-receipt-text-remove"},
      [ 
        h(
          "path",
          {"d":"M21.12 15.46L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88L21.12 15.46M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.26 20.74C13.09 20.18 13 19.59 13 19C13 18.32 13.12 17.64 13.34 17H6V15H14.53C15.67 13.73 17.29 13 19 13C19.68 13 20.36 13.12 21 13.34V2L19.5 3.5M18 13H6V11H18V13M18 9H6V7H18V9Z"}
        ) 
      ]
    )
  }
}