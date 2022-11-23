import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatTextRotationDownVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","text","rotation","down","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15.25 4H13.75L9 15H11.1L12 12.8H17L17.9 15H20L15.25 4M12.63 11L14.5 6L16.37 11H12.63M5 17.5L8 14.5H6V2H4V14.5H2L5 17.5M22 20L19 17V19H6.5V21H19V23L22 20Z"}
        ) 
      ]
    )
  }
}