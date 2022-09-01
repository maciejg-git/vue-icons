import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyJpy",
    vendor: "Mdi",
    type: [],
    tags: ["currency","jpy"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-jpy"},
      [ 
        h(
          "path",
          {"d":"M13.92 11H18V13H13V15H18V17H13V21H11V17H6V15H11V13H6V11H10.08L5 3H7.37L12 10.29L16.63 3H19L13.92 11Z"}
        ) 
      ]
    )
  }
}