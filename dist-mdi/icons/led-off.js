import { h } from 'vue'
export default {
  $_icon: {
    name: "LedOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["led","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,6A4,4 0 0,0 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10A4,4 0 0,0 12,6Z"}
        ) 
      ]
    )
  }
}