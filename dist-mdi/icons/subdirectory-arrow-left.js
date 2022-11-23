import { h } from 'vue'
export default {
  $_icon: {
    name: "SubdirectoryArrowLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["subdirectory","arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,9L12.42,10.42L8.83,14H18V4H20V16H8.83L12.42,19.58L11,21L5,15L11,9Z"}
        ) 
      ]
    )
  }
}