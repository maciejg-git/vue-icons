import { h } from 'vue'
export default {
  $_icon: {
    name: "SubdirectoryArrowRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["subdirectory","arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z"}
        ) 
      ]
    )
  }
}