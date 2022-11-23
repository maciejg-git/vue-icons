import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","right","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"}
        ) 
      ]
    )
  }
}