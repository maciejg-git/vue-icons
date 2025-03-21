import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength4",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1,21H21V1"}
        ) 
      ]
    )
  }
}