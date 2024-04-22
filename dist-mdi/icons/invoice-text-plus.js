import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceTextPlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 3V22L6 20L9 22L12 20L13.3 20.86C13.1 20.28 13 19.65 13 19C13 15.69 15.69 13 19 13C19.7 13 20.37 13.12 21 13.34V3H3M17 7V9H7V7H17M15 11V13H7V11H15M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"}
        ) 
      ]
    )
  }
}