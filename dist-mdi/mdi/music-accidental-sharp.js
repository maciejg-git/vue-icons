import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicAccidentalSharp",
    vendor: "Mdi",
    type: "",
    tags: ["music","accidental","sharp"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-music-accidental-sharp"},
      [ 
        h(
          "path",
          {"d":"M17 9.5V7.5L15 8.1V5.5H13V8.7L11 9.3V6.5H9V9.9L7 10.5V12.5L9 11.9V13.9L7 14.5V16.5L9 15.9V18.5H11V15.3L13 14.7V17.5H15V14.1L17 13.5V11.5L15 12.1V10.1L17 9.5M13 12.7L11 13.3V11.3L13 10.7V12.7Z"}
        ) 
      ]
    )
  }
}