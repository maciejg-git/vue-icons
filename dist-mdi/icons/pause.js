import { h } from 'vue'
export default {
  $_icon: {
    name: "Pause",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pause"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,19H18V5H14M6,19H10V5H6V19Z"}
        ) 
      ]
    )
  }
}