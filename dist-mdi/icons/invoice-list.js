import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceList",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","list"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 22V3H21V22L18 20L15 22L12 20L9 22L6 20L3 22M17 9V7H15V9H17M13 9V7H7V9H13M13 11H7V13H13V11M15 13H17V11H15V13Z"}
        ) 
      ]
    )
  }
}