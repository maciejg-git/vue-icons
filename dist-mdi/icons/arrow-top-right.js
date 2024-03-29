import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","top","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"}
        ) 
      ]
    )
  }
}