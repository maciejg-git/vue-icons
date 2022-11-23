import { h } from 'vue'
export default {
  $_icon: {
    name: "RomanNumeral2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["roman","numeral","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 7V9H10V15H11V17H7V15H8V9H7V7H11M17 7V9H16V15H17V17H13V15H14V9H13V7H17Z"}
        ) 
      ]
    )
  }
}