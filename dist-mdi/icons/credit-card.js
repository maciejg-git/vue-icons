import { h } from 'vue'
export default {
  $_icon: {
    name: "CreditCard",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["credit","card"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z"}
        ) 
      ]
    )
  }
}