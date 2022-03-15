import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderFile",
    vendor: "Mdi",
    type: "",
    tags: ["folder","file"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-folder-file","innerHTML":"<path d='M15 8C12.79 8 11 9.79 11 12V20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V10.17L20.41 8.59L19.83 8H15M23 14V21C23 22.11 22.11 23 21 23H15C13.9 23 13 22.11 13 21V12C13 10.9 13.9 10 15 10H19L23 14M21 14.83L18.17 12H18V15H21V14.83Z' />"},
    )
  }
}