import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyPlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["key","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-key-plus"},
      [ 
        h(
          "path",
          {"d":"M7.5 3C9.5 3 11.1 4.2 11.7 6H21V9H18V12H15V9H11.7C11.1 10.8 9.4 12 7.5 12C5 12 3 10 3 7.5S5 3 7.5 3M7.5 6C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9 9 8.3 9 7.5 8.3 6 7.5 6M8 17H11V14H13V17H16V19H13V22H11V19H8V17Z"}
        ) 
      ]
    )
  }
}