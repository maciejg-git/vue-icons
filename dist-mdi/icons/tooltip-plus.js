import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipPlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tooltip","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z"}
        ) 
      ]
    )
  }
}