import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightBoldCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","right","bold","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z"}
        ) 
      ]
    )
  }
}