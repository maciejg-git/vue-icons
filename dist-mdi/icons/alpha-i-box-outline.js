import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaIBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","i","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-i-box-outline"},
      [ 
        h(
          "path",
          {"d":"M14,7V9H13V15H14V17H10V15H11V9H10V7H14M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z"}
        ) 
      ]
    )
  }
}