import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength2Alert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","2","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 1L1 21H17V19H13V11.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19"}
        ) 
      ]
    )
  }
}