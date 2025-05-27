import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2L1,21H23M12,6L19.53,19H4.47"}
        ) 
      ]
    )
  }
}