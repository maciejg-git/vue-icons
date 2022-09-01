import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaABoxOutline",
    vendor: "Mdi",
    type: [],
    tags: ["alpha","a","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-a-box-outline"},
      [ 
        h(
          "path",
          {"d":"M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11Z"}
        ) 
      ]
    )
  }
}