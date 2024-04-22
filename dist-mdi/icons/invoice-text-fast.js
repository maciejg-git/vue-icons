import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceTextFast",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text","fast"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 5H22V21L19.5 19.32L17 21L14.5 19.32L12 21L9.5 19.32L7 21V5M18 9H11V11H18V9M11 13V15H16V13H11M3 7C2.4 7 2 7.4 2 8C2 8.6 2.4 9 3 9H5V7H3M1 12C1 11.4 1.4 11 2 11H5V13H2C1.4 13 1 12.6 1 12M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1Z"}
        ) 
      ]
    )
  }
}