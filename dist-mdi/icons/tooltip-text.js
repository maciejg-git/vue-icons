import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipText",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tooltip","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M5,5V7H19V5H5M5,9V11H15V9H5M5,13V15H17V13H5Z"}
        ) 
      ]
    )
  }
}