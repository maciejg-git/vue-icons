import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowCounterclockwise",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["arrow","counterclockwise"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"}
        ),
        h(
          "path",
          {"d":"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"}
        ) 
      ]
    )
  }
}