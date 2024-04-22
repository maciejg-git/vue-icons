import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceTextArrowRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text","arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 22V3H21V13.34C20.37 13.12 19.7 13 19 13C15.69 13 13 15.69 13 19C13 19.65 13.1 20.28 13.3 20.86L12 20L9 22L6 20L3 22M17 9V7H7V9H17M15 13V11H7V13H15M19 22V20H15V18H19V16L22 19L19 22Z"}
        ) 
      ]
    )
  }
}