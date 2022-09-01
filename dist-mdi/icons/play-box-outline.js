import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayBoxOutline",
    vendor: "Mdi",
    type: [],
    tags: ["play","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-play-box-outline"},
      [ 
        h(
          "path",
          {"d":"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z"}
        ) 
      ]
    )
  }
}