import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 2H2V17H4V4H17V2M21 22L18.5 20.32L16 22L13.5 20.32L11 22L8.5 20.32L6 22V6H21V22Z"}
        ) 
      ]
    )
  }
}