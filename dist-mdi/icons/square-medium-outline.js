import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMediumOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","medium","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,10V14H10V10H14M16,8H8V16H16V8Z"}
        ) 
      ]
    )
  }
}