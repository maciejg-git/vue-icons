import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceExportOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","export","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 22L18 20L15 22L12 20L9 22L6 20L3 22V3H21V9.67L19 7.67V5H5V18.26L6 17.6L9 19.6L12 17.6L15 19.6L18 17.6L19 18.26V16.33L21 14.33V22M20.5 12L15.5 7L14.08 8.41L16.67 11H7V13H16.67L14.08 15.58L15.5 17L20.5 12Z"}
        ) 
      ]
    )
  }
}