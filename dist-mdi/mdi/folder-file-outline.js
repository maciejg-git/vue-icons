import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderFileOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","file","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-file-outline"},
      [ 
        h(
          "path",
          {"d":"M4 18H11V20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V10.17L20.41 8.59L20 8.17V8H4V18M23 14V21C23 22.11 22.11 23 21 23H15C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14M21 15H18V12H15V21H21V15Z"}
        ) 
      ]
    )
  }
}