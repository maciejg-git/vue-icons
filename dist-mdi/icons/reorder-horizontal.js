import { h } from 'vue'
export default {
  $_icon: {
    name: "ReorderHorizontal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["reorder","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"}
        ) 
      ]
    )
  }
}