import { h } from 'vue'
export default {
  $_icon: {
    name: "FileTableBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","table","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-file-table-box-outline"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V5H19V19M9 18H6V16H9V18M13 18H10V16H13V18M9 15H6V13H9V15M13 15H10V13H13V15M9 12H6V10H9V12M13 12H10V10H13V12Z"}
        ) 
      ]
    )
  }
}