import { h } from 'vue'
export default {
  $_icon: {
    name: "StoreSearch",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["store","search"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11.9 10.9C10.64 12.17 10 13.84 10 15.5V12H4V16H10V15.5C10 16.35 10.17 17.2 10.5 18H2V12H1V10L2 5H18L18.89 9.46C16.56 8.53 13.79 9 11.9 10.9M18 2H2V4H18V2M23.39 21L22 22.39L18.88 19.32C18.19 19.75 17.37 20 16.5 20C14 20 12 18 12 15.5S14 11 16.5 11 21 13 21 15.5C21 16.38 20.75 17.21 20.31 17.9L23.39 21M19 15.5C19 14.12 17.88 13 16.5 13S14 14.12 14 15.5 15.12 18 16.5 18 19 16.88 19 15.5Z"}
        ) 
      ]
    )
  }
}