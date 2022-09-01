import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoMinusOutline",
    vendor: "Mdi",
    type: [],
    tags: ["video","minus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-video-minus-outline"},
      [ 
        h(
          "path",
          {"d":"M15 8V16H5V8H15M16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6M13 13H7V11H13V13Z"}
        ) 
      ]
    )
  }
}