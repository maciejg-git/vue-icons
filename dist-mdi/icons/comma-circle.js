import { h } from 'vue'
export default {
  $_icon: {
    name: "CommaCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["comma","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15,13L13,17H10L12,13H9V7H15V13Z"}
        ) 
      ]
    )
  }
}