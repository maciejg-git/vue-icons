import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderPlusOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-folder-plus-outline","innerHTML":"<path d='M12 12H14V10H16V12H18V14H16V16H14V14H12V12M22 8V18C22 19.11 21.11 20 20 20H4C2.89 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.11 6 22 6.89 22 8M20 8H4V18H20V8Z' />"},
    )
  }
}