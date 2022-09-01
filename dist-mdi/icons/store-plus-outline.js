import { h } from 'vue'
export default {
  $_icon: {
    name: "StorePlusOutline",
    vendor: "Mdi",
    type: [],
    tags: ["store","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-store-plus-outline"},
      [ 
        h(
          "path",
          {"d":"M20 6H4V4H20V6M15.69 14H14V15.69C13.37 16.64 13 17.77 13 19C13 19.34 13.04 19.67 13.09 20H4V14H3V12L4 7H20L21 12V13.35C20.37 13.13 19.7 13 19 13C17.77 13 16.64 13.37 15.69 14M12 14H6V18H12V14M18.96 12L18.36 9H5.64L5.04 12H18.96M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"}
        ) 
      ]
    )
  }
}