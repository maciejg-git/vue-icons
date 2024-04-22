import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceImport",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","import"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 20L21 22V3H3V11H12.67L10.08 8.41L11.5 7L16.5 12L11.5 17L10.08 15.58L12.67 13H3V22L6 20L9 22L12 20L15 22L18 20Z"}
        ) 
      ]
    )
  }
}