import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrangeSendToBack",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrange","send","to","back"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z"}
        ) 
      ]
    )
  }
}