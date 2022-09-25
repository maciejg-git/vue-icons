import { h } from 'vue'
export default {
  $_icon: {
    name: "NotePlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["note","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-note-plus"},
      [ 
        h(
          "path",
          {"d":"M19 13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z"}
        ) 
      ]
    )
  }
}