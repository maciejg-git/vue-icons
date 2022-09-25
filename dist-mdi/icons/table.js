import { h } from 'vue'
export default {
  $_icon: {
    name: "Table",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-table"},
      [ 
        h(
          "path",
          {"d":"M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"}
        ) 
      ]
    )
  }
}