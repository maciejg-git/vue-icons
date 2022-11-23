import { h } from 'vue'
export default {
  $_icon: {
    name: "SendOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["send","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z"}
        ) 
      ]
    )
  }
}