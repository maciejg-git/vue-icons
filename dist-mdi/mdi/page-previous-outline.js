import { h } from 'vue'
export default {
  $_icon: {
    name: "PagePreviousOutline",
    vendor: "Mdi",
    type: "",
    tags: ["page","previous","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-page-previous-outline"},
      [ 
        h(
          "path",
          {"d":"M2,3H19A2,2 0 0,1 21,5V9H19V5H2V19H19V15H21V19A2,2 0 0,1 19,21H2A2,2 0 0,1 0,19V5A2,2 0 0,1 2,3M17,15V13H24V11H17V9L13,12L17,15M4,13H11V11H4V13M4,9H11V7H4V9M4,17H8V15H4V17Z"}
        ) 
      ]
    )
  }
}