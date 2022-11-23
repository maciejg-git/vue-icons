import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownThin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z"}
        ) 
      ]
    )
  }
}