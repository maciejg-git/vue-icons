import { h } from 'vue'
export default {
  $_icon: {
    name: "QueueFirstInLastOut",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["queue","first","in","last","out"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 6H18V8H6V6M6 10.5H18V12.5H6V10.5M6 15H18V17H6V15M9 19H15L12 22L9 19M9 2H15L12 5L9 2Z"}
        ) 
      ]
    )
  }
}