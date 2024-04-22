import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceTextMultipleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","text","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 2V17H4V4H17V2H2M10 10H17V12H10V10M15 14H10V16H15V14M18.5 20.32L21 22V6H6V22L8.5 20.32L11 22L13.5 20.32L16 22L18.5 20.32M19 8V17.57L16 19.59L13.5 17.9L11 19.59L8 17.57V8H19Z"}
        ) 
      ]
    )
  }
}