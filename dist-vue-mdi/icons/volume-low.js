import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeLow",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["volume","low"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,9V15H11L16,20V4L11,9H7Z"}
        ) 
      ]
    )
  }
}