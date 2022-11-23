import { h } from 'vue'
export default {
  $_icon: {
    name: "FileDocumentOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","document","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"}
        ) 
      ]
    )
  }
}