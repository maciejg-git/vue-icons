import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceTextEditOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text","edit","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.86 21.43L9 22L6 20L3 22V3H21V10.2C20.37 9.93 19.64 9.93 19 10.22V5H5V18.26L6 17.6L9 19.6L9.86 19V21.43M11.86 19.96L18 13.83L20.03 15.87L13.9 22H11.86V19.96M21.71 14.19L20.73 15.17L18.69 13.13L19.67 12.15L19.68 12.14L19.69 12.13C19.86 11.97 20.12 11.96 20.31 12.09C20.34 12.1 20.37 12.13 20.39 12.15L21.71 13.47C21.91 13.67 21.91 14 21.71 14.19M17 9V7H7V9H17M15 13V11H7V13H15Z"}
        ) 
      ]
    )
  }
}