import { h } from 'vue'
export default {
  $_icon: {
    name: "GamepadDown",
    vendor: "Mdi",
    type: [],
    tags: ["gamepad","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-gamepad-down"},
      [ 
        h(
          "path",
          {"d":"M9,2V7.5L12,10.5L15,7.5V2H9M2,9V15H7.5L10.5,12L7.5,9H2M16.5,9L13.5,12L16.5,15H22V9H16.5M12,13.5L9,16.5V22H15V16.5L12,13.5M11,18H13V20H11V18Z"}
        ) 
      ]
    )
  }
}