import { h } from 'vue'
export default {
  $_icon: {
    name: "FileDelimitedOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","delimited","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M10 19L12 15H9V10H15V15L13 19H10"}
        ) 
      ]
    )
  }
}