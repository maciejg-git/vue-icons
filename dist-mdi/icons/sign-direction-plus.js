import { h } from 'vue'
export default {
  $_icon: {
    name: "SignDirectionPlus",
    vendor: "Mdi",
    type: [],
    tags: ["sign","direction","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sign-direction-plus"},
      [ 
        h(
          "path",
          {"d":"M13 20H13.09A5.5 5.5 0 0 0 13.81 22H9A2 2 0 0 1 11 20V12H3.5L6 9.5L3.5 7H11V3L12 2L13 3V7H18L20.5 9.5L18 12H13M18 15V18H15V20H18V23H20V20H23V18H20V15Z"}
        ) 
      ]
    )
  }
}