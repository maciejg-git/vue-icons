import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowExpandVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","expand","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,9V15H16L12,19L8,15H11V9H8L12,5L16,9H13M4,2H20V4H4V2M4,20H20V22H4V20Z"}
        ) 
      ]
    )
  }
}