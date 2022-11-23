import { h } from 'vue'
export default {
  $_icon: {
    name: "Rectangle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["rectangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,6V19H20V6H4Z"}
        ) 
      ]
    )
  }
}