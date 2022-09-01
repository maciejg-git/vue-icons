import { h } from 'vue'
export default {
  $_icon: {
    name: "CursorMove",
    vendor: "Mdi",
    type: [],
    tags: ["cursor","move"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cursor-move"},
      [ 
        h(
          "path",
          {"d":"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"}
        ) 
      ]
    )
  }
}