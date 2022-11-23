import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleSmallUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","small","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8 15H16L12 8"}
        ) 
      ]
    )
  }
}