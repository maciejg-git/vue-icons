import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipNext",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skip","next"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,18H18V6H16M6,18L14.5,12L6,6V18Z"}
        ) 
      ]
    )
  }
}