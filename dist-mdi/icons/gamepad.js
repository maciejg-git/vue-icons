import { h } from 'vue'
export default {
  $_icon: {
    name: "Gamepad",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["gamepad"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16.5,9L13.5,12L16.5,15H22V9M9,16.5V22H15V16.5L12,13.5M7.5,9H2V15H7.5L10.5,12M15,7.5V2H9V7.5L12,10.5L15,7.5Z"}
        ) 
      ]
    )
  }
}