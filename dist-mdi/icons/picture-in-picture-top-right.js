import { h } from 'vue'
export default {
  $_icon: {
    name: "PictureInPictureTopRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["picture","in","picture","top","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,7H11V13H19V7M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z"}
        ) 
      ]
    )
  }
}