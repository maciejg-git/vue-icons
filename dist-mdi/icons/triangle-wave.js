import { h } from 'vue'
export default {
  $_icon: {
    name: "TriangleWave",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["triangle","wave"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22 12L17 22L7.1 6.04L4.24 12H2L7 2L16.9 17.96L19.76 12H22Z"}
        ) 
      ]
    )
  }
}