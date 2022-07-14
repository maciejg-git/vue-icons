import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyRub",
    vendor: "Mdi",
    type: "",
    tags: ["currency","rub"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-rub"},
      [ 
        h(
          "path",
          {"d":"M13.5 3H7V12H5V14H7V16H5V18H7V21H9V18H13V16H9V14H13.5C16.54 14 19 11.54 19 8.5S16.54 3 13.5 3M13.5 12H9V5H13.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12Z"}
        ) 
      ]
    )
  }
}