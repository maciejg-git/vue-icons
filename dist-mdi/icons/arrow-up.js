import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
        ) 
      ]
    )
  }
}