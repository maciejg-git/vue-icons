import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorPointSelect",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","point","select"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,20L7,22L12,11L17,22L12,20M8,2H16V5H22V7H16V10H8V7H2V5H8V2M10,4V8H14V4H10Z"}
        ) 
      ]
    )
  }
}