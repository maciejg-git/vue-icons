import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength4Alert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","4","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 17H21V11H19M19 21H21V19H19M1 21H17V9H21V1"}
        ) 
      ]
    )
  }
}