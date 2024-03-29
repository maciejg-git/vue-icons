import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayPause",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["play","pause"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,5V19L11,12M13,19H16V5H13M18,5V19H21V5"}
        ) 
      ]
    )
  }
}