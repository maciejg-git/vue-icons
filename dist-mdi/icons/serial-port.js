import { h } from 'vue'
export default {
  $_icon: {
    name: "SerialPort",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["serial","port"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,3H17V5H19V8H16V14H8V8H5V5H7V3M17,9H19V14H17V9M11,15H13V22H11V15M5,9H7V14H5V9Z"}
        ) 
      ]
    )
  }
}