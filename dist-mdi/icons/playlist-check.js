import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistCheck",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["playlist","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 10H3V12H14V10M14 6H3V8H14V6M3 16H10V14H3V16M21.5 11.5L23 13L16 20L11.5 15.5L13 14L16 17L21.5 11.5Z"}
        ) 
      ]
    )
  }
}