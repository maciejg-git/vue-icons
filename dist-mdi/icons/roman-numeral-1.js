import { h } from 'vue'
export default {
  $_icon: {
    name: "RomanNumeral1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["roman","numeral","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 7V9H13V15H14V17H10V15H11V9H10V7H14Z"}
        ) 
      ]
    )
  }
}