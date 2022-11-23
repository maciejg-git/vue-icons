import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftCircleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","left","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,11V13H10L13.5,16.5L12.08,17.92L6.16,12L12.08,6.08L13.5,7.5L10,11H18M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z"}
        ) 
      ]
    )
  }
}