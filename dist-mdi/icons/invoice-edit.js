import { h } from 'vue'
export default {
  $_icon: {
    name: "InvoiceEdit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["invoice","edit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.86 21.43L9 22L6 20L3 22V3H21V10.2C20.1 9.82 19 10 18.24 10.75L9.86 19.13V21.43M11.86 19.96L18 13.83L20.03 15.87L13.9 22H11.86V19.96M20.39 12.15C20.37 12.13 20.34 12.1 20.31 12.09C20.12 11.96 19.86 11.97 19.69 12.13L19.67 12.15L18.69 13.13L20.73 15.17L21.71 14.19C21.91 14 21.91 13.67 21.71 13.47L20.39 12.15Z"}
        ) 
      ]
    )
  }
}