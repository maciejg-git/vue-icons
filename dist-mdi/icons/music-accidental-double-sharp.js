import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicAccidentalDoubleSharp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","accidental","double","sharp"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15.41 10H17V7H14V8.59L12 10.59L10 8.59V7H7V10H8.59L10.59 12L8.59 14H7V17H10V15.41L12 13.41L14 15.41V17H17V14H15.41L13.41 12L15.41 10Z"}
        ) 
      ]
    )
  }
}