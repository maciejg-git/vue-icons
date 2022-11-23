import { h } from 'vue'
export default {
  $_icon: {
    name: "TabMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tab","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M7,13V15H15V13H7Z"}
        ) 
      ]
    )
  }
}