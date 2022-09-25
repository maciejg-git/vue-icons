import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCardSyncOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["credit","card","sync","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-credit-card-sync-outline"},
      [ 
        h(
          "path",
          {"d":"M4 18V12H16.05C17.05 11.37 18.23 11 19.5 11C20.39 11 21.23 11.18 22 11.5V6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13.5C13.24 19.38 13.08 18.7 13.03 18H4M4 6H20V8H4V6M23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5M19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z"}
        ) 
      ]
    )
  }
}