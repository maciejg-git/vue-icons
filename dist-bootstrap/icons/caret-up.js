import { h } from 'vue'
export default {
  $_icon: {
    name: "CaretUp",
    vendor: "B",
    type: [],
    tags: ["caret","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-caret-up"},
      [ 
        h(
          "path",
          {"d":"M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"}
        ) 
      ]
    )
  }
}