import { h } from 'vue'
export default {
  $_icon: {
    name: "WidgetsOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["widgets","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-widgets-outline"},
      [ 
        h(
          "path",
          {"d":"M16.7 4.5L19.5 7.3L16.7 10.1L13.9 7.3L16.7 4.5M9 5V9H5V5H9M19 15V19H15V15H19M16.7 1.7L11 7.3L16.7 13H13V21H21V13H16.7L22.3 7.3L16.7 1.7M11 3H3V11H11V3M9 15V19H5V15H9M11 13H3V21H11V13Z"}
        ) 
      ]
    )
  }
}