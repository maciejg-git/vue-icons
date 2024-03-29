import { h } from 'vue'
export default {
  $_icon: {
    name: "CardsDiamondOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cards","diamond","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5"}
        ) 
      ]
    )
  }
}