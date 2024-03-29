import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeExportOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","export","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M24 13L20 17V14H11V12H20V9L24 13M4 20V12H1L11 3L18 9.3V10H15.79L11 5.69L6 10.19V18H16V16H18V20H4Z"}
        ) 
      ]
    )
  }
}