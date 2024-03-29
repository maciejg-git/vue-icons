import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageFilterFrames",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["image","filter","frames"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,8H6V18H18M20,20H4V6H8.5L12.04,2.5L15.5,6H20M20,4H16L12,0L8,4H4A2,2 0 0,0 2,6V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V6A2,2 0 0,0 20,4Z"}
        ) 
      ]
    )
  }
}