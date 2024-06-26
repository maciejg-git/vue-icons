import { h } from 'vue'
export default {
  $_icon: {
    name: "Diameter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["diameter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,15V13H7V15L4,12L7,9V11H17V9L20,12L17,15Z"}
        ) 
      ]
    )
  }
}