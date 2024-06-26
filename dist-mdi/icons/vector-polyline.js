import { h } from 'vue'
export default {
  $_icon: {
    name: "VectorPolyline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vector","polyline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3M4 5H6V7H4M18 7H20V9H18M8 17H10V19H8Z"}
        ) 
      ]
    )
  }
}