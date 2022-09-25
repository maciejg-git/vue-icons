import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeGroupMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","group","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-group-minus"},
      [ 
        h(
          "path",
          {"d":"M2 6H1L5 2L9 6H8V9H6V6H4V9H2V6M13 10.9L14.3 12H16V9H18V12H21V8H22L17 3L12 8H13V10.9M13.8 22C13.3 21.1 13 20.1 13 19C13 17.4 13.6 15.9 14.7 14.9L9 10L2 16H4V22H7V17H11V22H13.8M15 18V20H23V18H15Z"}
        ) 
      ]
    )
  }
}