import { h } from 'vue'
export default {
  $_icon: {
    name: "VideoCheck",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["video","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-video-check"},
      [ 
        h(
          "path",
          {"d":"M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5M8.93 15L6 11.8L7.24 10.56L8.93 12.26L12.76 8.43L14 9.93L8.93 15Z"}
        ) 
      ]
    )
  }
}