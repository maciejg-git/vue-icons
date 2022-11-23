import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["playlist","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 16H10V14H3M12 14V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z"}
        ) 
      ]
    )
  }
}