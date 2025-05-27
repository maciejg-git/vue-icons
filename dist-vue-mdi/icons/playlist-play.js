import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaylistPlay",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["playlist","play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 10H14V12H3V10M3 6H14V8H3V6M3 14H10V16H3V14M16 13V21L22 17L16 13Z"}
        ) 
      ]
    )
  }
}