import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceSend",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","send"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 22V3H21V14.26L12 9.76V20L9 22L6 20L3 22M24 18L14 23V19L18 18L14 17V13L24 18Z"}
        ) 
      ]
    )
  }
}