import { h } from 'vue'
export default {
  $_icon: {
    name: "ChessPawn",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["chess","pawn"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M264 136c0 37.1-19.4 69.6-48.6 88H224c17.7 0 32 14.3 32 32s-14.3 32-32 32c0 96 24 128 24 128H72s24-32 24-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h8.5C75.4 205.6 56 173.1 56 136C56 78.6 102.6 32 160 32s104 46.6 104 104zM32 448H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"}
        ) 
      ]
    )
  }
}