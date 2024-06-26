import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","note","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 3V13.55A4 4 0 1 0 14 17V7H18V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"}
        ) 
      ]
    )
  }
}