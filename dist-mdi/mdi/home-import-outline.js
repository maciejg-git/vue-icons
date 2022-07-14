import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeImportOutline",
    vendor: "Mdi",
    type: "",
    tags: ["home","import","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-import-outline"},
      [ 
        h(
          "path",
          {"d":"M15 13L11 17V14H2V12H11V9L15 13M5 20V16H7V18H17V10.19L12 5.69L7.21 10H4.22L12 3L22 12H19V20H5Z"}
        ) 
      ]
    )
  }
}