import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength3Alert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","3","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 1L1 21H17V19H16V8.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19"}
        ) 
      ]
    )
  }
}