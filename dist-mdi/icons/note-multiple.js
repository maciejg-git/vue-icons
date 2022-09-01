import { h } from 'vue'
export default {
  $_icon: {
    name: "NoteMultiple",
    vendor: "Mdi",
    type: [],
    tags: ["note","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-note-multiple"},
      [ 
        h(
          "path",
          {"d":"M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3Z"}
        ) 
      ]
    )
  }
}