import { h } from 'vue'
export default {
  $_icon: {
    name: "TableColumnPlusAfter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","column","plus","after"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z"}
        ) 
      ]
    )
  }
}