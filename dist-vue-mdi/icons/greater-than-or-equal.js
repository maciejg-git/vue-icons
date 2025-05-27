import { h } from 'vue'
export default {
  $_icon: {
    name: "GreaterThanOrEqual",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["greater","than","or","equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6.5,2.27L20,10.14L6.5,18L5.5,16.27L16.03,10.14L5.5,4L6.5,2.27M20,20V22H5V20H20Z"}
        ) 
      ]
    )
  }
}