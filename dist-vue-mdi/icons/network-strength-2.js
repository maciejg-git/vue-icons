import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrength2",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["network","strength","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1,21H21V1M19,5.83V19H13V11.83"}
        ) 
      ]
    )
  }
}