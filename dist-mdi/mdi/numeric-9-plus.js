import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric9Plus",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","9","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-9-plus"},
      [ 
        h(
          "path",
          {"d":"M19 11H17V9H15V11H13V13H15V15H17V13H19V11M10 7H8C6.9 7 6 7.9 6 9V11C6 12.11 6.9 13 8 13H10V15H6V17H10C11.11 17 12 16.11 12 15V9C12 7.89 11.1 7 10 7M10 11H8V9H10V11Z"}
        ) 
      ]
    )
  }
}