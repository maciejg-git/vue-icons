import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tooltip","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M16 11H8V9H16V11Z"}
        ) 
      ]
    )
  }
}