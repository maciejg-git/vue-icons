import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageSettings",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","settings"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M11,24H13V22H11V24M7,24H9V22H7V24M15,24H17V22H15V24Z"}
        ) 
      ]
    )
  }
}