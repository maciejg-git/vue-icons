import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMedium",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","medium"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,8H8V16H16V8Z"}
        ) 
      ]
    )
  }
}