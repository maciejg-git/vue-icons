import { h } from 'vue'
export default {
  $_icon: {
    name: "Countertop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["countertop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-countertop"},
      [ 
        h(
          "path",
          {"d":"M18 10V7C18 5.34 16.66 4 15 4S12 5.34 12 7H14C14 6.45 14.45 6 15 6S16 6.45 16 7V10H8C9.1 10 10 9.1 10 8V4H4V8C4 9.1 4.9 10 6 10H2V12H4V20H20V12H22V10H18M13 18H11V12H13V18Z"}
        ) 
      ]
    )
  }
}