import { h } from 'vue'
export default {
  $_icon: {
    name: "Signal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["signal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z"}
        ) 
      ]
    )
  }
}