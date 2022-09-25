import { h } from 'vue'
export default {
  $_icon: {
    name: "ProjectorScreen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["projector","screen"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-projector-screen"},
      [ 
        h(
          "path",
          {"d":"M4,2A1,1 0 0,0 3,3V4A1,1 0 0,0 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20A1,1 0 0,0 21,4V3A1,1 0 0,0 20,2H4Z"}
        ) 
      ]
    )
  }
}