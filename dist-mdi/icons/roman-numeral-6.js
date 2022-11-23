import { h } from 'vue'
export default {
  $_icon: {
    name: "RomanNumeral6",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["roman","numeral","6"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 7L8 17H10L12 7H10L9 12L8 7H6M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z"}
        ) 
      ]
    )
  }
}