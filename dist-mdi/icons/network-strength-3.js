import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength3",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","3"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1,21H21V1M19,5.83V19H16V8.83"}
        ) 
      ]
    )
  }
}