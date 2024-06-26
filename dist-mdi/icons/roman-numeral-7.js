import { h } from 'vue'
export default {
  $_icon: {
    name: "RomanNumeral7",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["roman","numeral","7"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 7L6 17H8L10 7H8L7 12L6 7H4M15 7V9H14V15H15V17H11V15H12V9H11V7H15M20 7V9H19V15H20V17H16V15H17V9H16V7H20Z"}
        ) 
      ]
    )
  }
}