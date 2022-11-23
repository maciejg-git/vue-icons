import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalfStroke",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["circle","half","stroke"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"}
        ) 
      ]
    )
  }
}