import { h } from 'vue'
export default {
  $_icon: {
    name: "PerspectiveMore",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["perspective","more"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-perspective-more"},
      [ 
        h(
          "path",
          {"d":"M16.56,12L19.23,20H4.78L7.44,12H16.56M17,1L13,5L17,9V6H21V4H17V1M7,1V4H3V6H7V9L11,5L7,1M18,10H6L2,22H22L18,10Z"}
        ) 
      ]
    )
  }
}