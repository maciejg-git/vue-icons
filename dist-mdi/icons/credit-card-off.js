import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardOff",
    vendor: "Mdi",
    type: [],
    tags: ["credit","card","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-off"},
      [ 
        h(
          "path",
          {"d":"M11.2 8L7.2 4H20A2 2 0 0 1 22 6V18A1.91 1.91 0 0 1 21.88 18.68L14.2 11H20V8M20.84 22.73L18.11 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 2.65 4.54L1.11 3L2.39 1.73L22.11 21.46M9.11 11L6.11 8H4V11Z"}
        ) 
      ]
    )
  }
}