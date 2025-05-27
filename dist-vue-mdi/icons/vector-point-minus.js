import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorPointMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","point","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9 9V15H15V9H9M11 11H13V13H11V11M15 18V20H23V18H15Z"}
        ) 
      ]
    )
  }
}