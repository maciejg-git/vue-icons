import { h } from 'vue'
export default {
  $_icon: {
    name: "WrapDisabled",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["wrap","disabled"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,7H3V5H16V7M3,19H16V17H3V19M22,12L18,9V11H3V13H18V15L22,12Z"}
        ) 
      ]
    )
  }
}