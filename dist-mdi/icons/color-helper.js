import { h } from 'vue'
export default {
  $_icon: {
    name: "ColorHelper",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["color","helper"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0,24H24V20H0V24Z"}
        ) 
      ]
    )
  }
}