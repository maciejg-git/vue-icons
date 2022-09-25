import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyIls",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["currency","ils"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-currency-ils"},
      [ 
        h(
          "path",
          {"d":"M22,16A5,5 0 0,1 17,21H8V9H10V19H17A3,3 0 0,0 20,16V3H22V16M16,8V15H14V8A3,3 0 0,0 11,5H4V21H2V3H11A5,5 0 0,1 16,8Z"}
        ) 
      ]
    )
  }
}