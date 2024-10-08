import { h } from 'vue'
export default {
  $_icon: {
    name: "Barcode",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["barcode"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z"}
        ) 
      ]
    )
  }
}