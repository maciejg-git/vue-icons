import { h } from 'vue'
export default {
  $_icon: {
    name: "NetworkStrengthOff",
    vendor: "Mdi",
    type: [],
    tags: ["network","strength","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-network-strength-off"},
      [ 
        h(
          "path",
          {"d":"M21,1L12.4,9.6L21,18.19M4.77,4.5L3.5,5.77L9.86,12.13L1,21H18.73L20.73,23L22,21.73"}
        ) 
      ]
    )
  }
}