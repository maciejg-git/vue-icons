import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderTextOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["folder","text","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,18H4V8H20M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M15,16H6V14H15V16M18,12H6V10H18V12Z"}
        ) 
      ]
    )
  }
}