import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteSixteenth",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","note","sixteenth"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 7V3H12V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V11H18V8H14V7H18Z"}
        ) 
      ]
    )
  }
}