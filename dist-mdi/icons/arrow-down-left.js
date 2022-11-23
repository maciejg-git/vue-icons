import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 4V6H13.5C11 6 9 8 9 10.5V16.17L12.09 13.09L13.5 14.5L8 20L2.5 14.5L3.91 13.08L7 16.17V10.5C7 6.91 9.91 4 13.5 4H20Z"}
        ) 
      ]
    )
  }
}