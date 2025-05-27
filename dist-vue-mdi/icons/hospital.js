import { h } from 'vue'
export default {
  $_icon: {
    name: "Hospital",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["hospital"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 14H14V18H10V14H6V10H10V6H14V10H18"}
        ) 
      ]
    )
  }
}