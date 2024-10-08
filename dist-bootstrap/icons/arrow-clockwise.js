import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowClockwise",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["arrow","clockwise"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"}
        ),
        h(
          "path",
          {"d":"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"}
        ) 
      ]
    )
  }
}