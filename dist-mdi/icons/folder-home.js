import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderHome",
    vendor: "Mdi",
    type: [],
    tags: ["folder","home"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-home"},
      [ 
        h(
          "path",
          {"d":"M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M17 13V17H15V14H13V17H11V13H9L14 9L19 13Z"}
        ) 
      ]
    )
  }
}