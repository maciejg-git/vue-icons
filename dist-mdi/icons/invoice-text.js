import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceText",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 3V22L6 20L9 22L12 20L15 22L18 20L21 22V3H3M17 7V9H7V7H17M15 11V13H7V11H15Z"}
        ) 
      ]
    )
  }
}