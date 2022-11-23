import { h } from 'vue'
export default {
  $_icon: {
    name: "Home",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"}
        ) 
      ]
    )
  }
}