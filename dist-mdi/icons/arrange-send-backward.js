import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrangeSendBackward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrange","send","backward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z"}
        ) 
      ]
    )
  }
}