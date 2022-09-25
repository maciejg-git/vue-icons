import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardChip",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["credit","card","chip"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-chip"},
      [ 
        h(
          "path",
          {"d":"M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M10 14H5V10H10V14Z"}
        ) 
      ]
    )
  }
}