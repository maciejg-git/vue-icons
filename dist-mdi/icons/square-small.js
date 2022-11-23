import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareSmall",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square","small"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,14V10H14V14H10Z"}
        ) 
      ]
    )
  }
}