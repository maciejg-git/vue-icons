import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSplitHorizontal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","split","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"}
        ) 
      ]
    )
  }
}