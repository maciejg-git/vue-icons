import { h } from 'vue'
export default {
  $_icon: {
    name: "StarFourPointsSmall",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["star","four","points","small"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z"}
        ) 
      ]
    )
  }
}