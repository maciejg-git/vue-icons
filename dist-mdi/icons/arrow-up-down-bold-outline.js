import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpDownBoldOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up","down","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,10H22L12,0L2,10H8V14H2L12,24L22,14H16V10M14,16H17L12,21L7,16H10V8H7L12,3L17,8H14V16Z"}
        ) 
      ]
    )
  }
}