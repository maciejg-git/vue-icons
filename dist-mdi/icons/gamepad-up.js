import { h } from 'vue'
export default {
  $_icon: {
    name: "GamepadUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["gamepad","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,2V7.5L12,10.5L15,7.5V2H9M11,4H13V6H11V4M2,9V15H7.5L10.5,12L7.5,9H2M16.5,9L13.5,12L16.5,15H22V9H16.5M12,13.5L9,16.5V22H15V16.5L12,13.5Z"}
        ) 
      ]
    )
  }
}