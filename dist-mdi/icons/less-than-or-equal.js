import { h } from 'vue'
export default {
  $_icon: {
    name: "LessThanOrEqual",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["less","than","or","equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z"}
        ) 
      ]
    )
  }
}