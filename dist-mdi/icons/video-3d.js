import { h } from 'vue'
export default {
  $_icon: {
    name: "Video3d",
    vendor: "Mdi",
    type: [],
    tags: ["video","3d"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-video-3d"},
      [ 
        h(
          "path",
          {"d":"M5,7H9A2,2 0 0,1 11,9V15A2,2 0 0,1 9,17H5V15H9V13H6V11H9V9H5V7M13,7H16A3,3 0 0,1 19,10V14A3,3 0 0,1 16,17H13V7M16,15A1,1 0 0,0 17,14V10A1,1 0 0,0 16,9H15V15H16Z"}
        ) 
      ]
    )
  }
}