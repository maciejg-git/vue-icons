import { h } from 'vue'
export default {
  $_icon: {
    name: "DistributeHorizontalCenter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["distribute","horizontal","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8 2V5H10V19H8V22H6V19H4V5H6V2H8M16 2V7H14V17H16V22H18V17H20V7H18V2H16Z"}
        ) 
      ]
    )
  }
}