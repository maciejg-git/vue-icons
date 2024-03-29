import { h } from 'vue'
export default {
  $_icon: {
    name: "StarPlus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["star","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C14.9 12 12.4 14.3 12 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z"}
        ) 
      ]
    )
  }
}