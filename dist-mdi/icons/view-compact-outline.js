import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewCompactOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","compact","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,5V19H22V5H3M5,7H20V11H5V7M5,17V13H9V17H5M11,17V13H20V17H11Z"}
        ) 
      ]
    )
  }
}