import { h } from 'vue'
export default {
  $_icon: {
    name: "NotebookOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["notebook","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-notebook-outline"},
      [ 
        h(
          "path",
          {"d":"M17,4V10L15,8L13,10V4H9V20H19V4H17M3,7V5H5V4C5,2.89 5.9,2 7,2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M5,5V7H7V5H5M5,19H7V17H5V19M5,13H7V11H5V13Z"}
        ) 
      ]
    )
  }
}