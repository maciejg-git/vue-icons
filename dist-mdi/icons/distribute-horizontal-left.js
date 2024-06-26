import { h } from 'vue'
export default {
  $_icon: {
    name: "DistributeHorizontalLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["distribute","horizontal","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 7V17H16V22H14V2H16V7H21M5 2H3V22H5V19H10V5H5V2Z"}
        ) 
      ]
    )
  }
}