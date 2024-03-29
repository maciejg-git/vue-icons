import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftBold",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","left","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z"}
        ) 
      ]
    )
  }
}