import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardEditOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["credit","card","edit","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-edit-outline"},
      [ 
        h(
          "path",
          {"d":"M13 18.9L19.1 12.8L21.2 14.9L15.1 21H13V18.9M21.4 11.3L22.7 12.6C22.9 12.8 22.9 13.1 22.7 13.3L21.7 14.3L19.6 12.3L20.6 11.3C20.7 11.2 20.8 11.1 21 11.1C21.2 11.1 21.3 11.2 21.4 11.3M11 18H4V12H17.1L22 7.1V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M4 6H20V8H4V6Z"}
        ) 
      ]
    )
  }
}