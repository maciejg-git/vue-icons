import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerSandFull",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["timer","sand","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6Z"}
        ) 
      ]
    )
  }
}