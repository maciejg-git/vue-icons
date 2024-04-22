import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceSendOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","send","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M24 18L14 13V17L18 18L14 19V23L24 18M19 13.26L21 14.26V3H3V22L6 20L9 22L12 20V17.6L9 19.6L6 17.6L5 18.26V5H19V13.26Z"}
        ) 
      ]
    )
  }
}