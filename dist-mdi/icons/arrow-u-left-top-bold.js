import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowULeftTopBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","u","left","top","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13.5 21H6V17H13.5C15.43 17 17 15.43 17 13.5S15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5S17.64 21 13.5 21Z"}
        ) 
      ]
    )
  }
}