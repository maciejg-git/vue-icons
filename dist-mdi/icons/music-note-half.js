import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteHalf",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","note","half"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-note-half"},
      [ 
        h(
          "path",
          {"d":"M16 3H14V13.56A3.96 3.96 0 0 0 12 13A4 4 0 1 0 16 17V3M12 19A2 2 0 1 1 14 17A2 2 0 0 1 12 19Z"}
        ) 
      ]
    )
  }
}