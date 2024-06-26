import { h } from 'vue'
export default {
  $_icon: {
    name: "CurrencyFra",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["currency","fra"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 5V3H7V16H5V18H7V21H9V18H13V16H9V13H17V11H9V5H18Z"}
        ) 
      ]
    )
  }
}