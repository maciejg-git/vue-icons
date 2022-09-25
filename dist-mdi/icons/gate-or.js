import { h } from 'vue'
export default {
  $_icon: {
    name: "GateOr",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["gate","or"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-gate-or"},
      [ 
        h(
          "path",
          {"d":"M2,4C5,10 5,14 2,20H8C13,20 19,16 22,12C19,8 13,4 8,4H2M5,6H8C11.5,6 16.3,9 19.3,12C16.3,15 11.5,18 8,18H5C6.4,13.9 6.4,10.1 5,6Z"}
        ) 
      ]
    )
  }
}