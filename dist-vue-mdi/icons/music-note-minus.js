import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","note","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 12V14H22V12H14M9 3V13.55C8.41 13.21 7.73 13 7 13C4.79 13 3 14.79 3 17S4.79 21 7 21 11 19.21 11 17V7H15V3H9Z"}
        ) 
      ]
    )
  }
}