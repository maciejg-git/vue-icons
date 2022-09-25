import { h } from 'vue'
export default {
  $_icon: {
    name: "FuseBlade",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fuse","blade"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fuse-blade"},
      [ 
        h(
          "path",
          {"d":"M10,21H8L6,19V16H10V21M18,16H14V21H16L18,19V16M3,3V4A1,1 0 0,0 4,5V14A1,1 0 0,0 5,15H19A1,1 0 0,0 20,14V5H20A1,1 0 0,0 21,4V3H3M11.83,13V9.73H10L12.61,4.66V7.93H14.36L11.83,13Z"}
        ) 
      ]
    )
  }
}