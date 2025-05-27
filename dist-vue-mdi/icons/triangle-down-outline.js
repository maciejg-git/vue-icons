import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleDownOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","down","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 22L1 3H23M12 18L19.53 5H4.47"}
        ) 
      ]
    )
  }
}