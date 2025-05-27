import { h } from 'vue'
export default {
  $_icon: {
    name: "AngleRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["angle","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,4H7V11H13V17H20V19H5V4M7,17H11V13H7V17Z"}
        ) 
      ]
    )
  }
}