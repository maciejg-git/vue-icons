import { h } from 'vue'
export default {
  $_icon: {
    name: "Pasta",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pasta"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pasta"},
      [ 
        h(
          "path",
          {"d":"M4 16.5V8H3V7H4V6H3V5H4V4H3V3H9C9.5 3.03 9.95 3.24 10.34 3.63S10.95 4.5 11 5H21V6H11C10.95 6.53 10.73 7 10.34 7.43S9.5 8.05 9 8H7V15.05C7.05 15.05 7.13 15.04 7.24 15S7.44 15 7.5 15C8.06 15 8.7 15.14 9.42 15.42C9.83 14.5 10.53 13.68 11.53 13S13.53 12 14.53 12C16.06 12 17.36 12.53 18.42 13.59S20 15.95 20 17.5C20 17.55 20 17.64 20 17.77S19.97 17.97 19.97 18H3.14C3.27 17.5 3.55 17 4 16.5M6 15.23V8H5V15.7C5.5 15.45 5.81 15.3 6 15.23M9 7V6H7V7H9M9 4H7V5H9V4M5 4V5H6V4H5M5 6V7H6V6H5M2 19H22L20 21H4L2 19Z"}
        ) 
      ]
    )
  }
}