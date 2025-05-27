import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleSmallDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","small","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8 9H16L12 16"}
        ) 
      ]
    )
  }
}