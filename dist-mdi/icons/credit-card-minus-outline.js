import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardMinusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["credit","card","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M24 18V20H16V18M19 8V6H3V8H19M19 12H3V18H14V20H3C1.89 20 1 19.1 1 18V6C1 4.89 1.89 4 3 4H19C20.11 4 21 4.89 21 6V13H19V12Z"}
        ) 
      ]
    )
  }
}