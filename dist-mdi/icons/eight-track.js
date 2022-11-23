import { h } from 'vue'
export default {
  $_icon: {
    name: "EightTrack",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["eight","track"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,2L5,5V16L6,20C6.27,21.07 6.9,22 8,22H16A2,2 0 0,0 18,20L19,16V5L17,2H15V3H13V2H7M7,6H17V16H7V6Z"}
        ) 
      ]
    )
  }
}