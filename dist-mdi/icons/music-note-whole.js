import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicNoteWhole",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","note","whole"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 15A2 2 0 1 1 10 17A2 2 0 0 1 12 15M12 13A4 4 0 1 0 16 17A4 4 0 0 0 12 13Z"}
        ) 
      ]
    )
  }
}