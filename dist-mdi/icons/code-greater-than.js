import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeGreaterThan",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["code","greater","than"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-code-greater-than"},
      [ 
        h(
          "path",
          {"d":"M10.41,7.41L15,12L10.41,16.6L9,15.18L12.18,12L9,8.82M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z"}
        ) 
      ]
    )
  }
}