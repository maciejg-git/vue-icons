import { h } from 'vue'
export default {
  $_icon: {
    name: "FlipToFront",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flip","to","front"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flip-to-front"},
      [ 
        h(
          "path",
          {"d":"M7,21H9V19H7M11,21H13V19H11M19,15H9V5H19M19,3H9C7.89,3 7,3.89 7,5V15A2,2 0 0,0 9,17H14L18,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3M15,21H17V19H15M3,9H5V7H3M5,21V19H3A2,2 0 0,0 5,21M3,17H5V15H3M3,13H5V11H3V13Z"}
        ) 
      ]
    )
  }
}