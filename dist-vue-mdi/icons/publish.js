import { h } from 'vue'
export default {
  $_icon: {
    name: "Publish",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["publish"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z"}
        ) 
      ]
    )
  }
}