import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,18H6V6H18V18Z"}
        ) 
      ]
    )
  }
}