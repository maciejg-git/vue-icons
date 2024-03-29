import { h } from 'vue'
export default {
  $_icon: {
    name: "Presentation",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["presentation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,3H10A2,2 0 0,1 12,1A2,2 0 0,1 14,3H22V5H21V16H15.25L17,22H15L13.25,16H10.75L9,22H7L8.75,16H3V5H2V3M5,5V14H19V5H5Z"}
        ) 
      ]
    )
  }
}