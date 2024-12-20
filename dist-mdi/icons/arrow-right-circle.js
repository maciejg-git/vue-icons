import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","right","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z"}
        ) 
      ]
    )
  }
}