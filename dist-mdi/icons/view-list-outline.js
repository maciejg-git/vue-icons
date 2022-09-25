import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewListOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","list","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-view-list-outline"},
      [ 
        h(
          "path",
          {"d":"M3 5V19H20V5H3M7 7V9H5V7H7M5 13V11H7V13H5M5 15H7V17H5V15M18 17H9V15H18V17M18 13H9V11H18V13M18 9H9V7H18V9Z"}
        ) 
      ]
    )
  }
}