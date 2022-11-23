import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["video","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,16L14,12.8V16H6V8H14V11.2L18,8M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"}
        ) 
      ]
    )
  }
}