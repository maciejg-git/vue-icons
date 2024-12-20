import { h } from 'vue'
export default {
  $_icon: {
    name: "MathNorm",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["math","norm"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 21V3H16V21H14M8 21V3H10V21H8Z"}
        ) 
      ]
    )
  }
}