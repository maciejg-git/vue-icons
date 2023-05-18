import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1 3H23L12 22"}
        ) 
      ]
    )
  }
}