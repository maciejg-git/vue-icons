import { h } from 'vue'
export default {
  $_icon: {
    name: "Coffin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["coffin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,22L5,8L8,2H16L19,8L16,22H8M11,6V8H9V10H11V15H13V10H15V8H13V6H11Z"}
        ) 
      ]
    )
  }
}