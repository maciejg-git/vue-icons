import { h } from 'vue'
export default {
  $_icon: {
    name: "SyllabaryKatakanaHalfwidth",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["syllabary","katakana","halfwidth"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-syllabary-katakana-halfwidth"},
      [ 
        h(
          "path",
          {"d":"M8 4V6H14L13 10.81L15 11.2L16 6.1V4M10 9V12C10 14.86 9.34 17.29 8.08 18.61L9.5 20C11.35 18.08 12 15.15 12 12V9Z"}
        ) 
      ]
    )
  }
}