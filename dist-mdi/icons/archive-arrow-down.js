import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveArrowDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["archive","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 3H21V7H3V3M4 21V8H20V21H4M14 14V11H10V14H7L12 19L17 14H14Z"}
        ) 
      ]
    )
  }
}