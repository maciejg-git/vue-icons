import { h } from 'vue'
export default {
  $_icon: {
    name: "CallMade",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["call","made"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5"}
        ) 
      ]
    )
  }
}