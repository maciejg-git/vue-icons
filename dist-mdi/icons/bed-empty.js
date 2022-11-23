import { h } from 'vue'
export default {
  $_icon: {
    name: "BedEmpty",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bed","empty"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,7H5V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7"}
        ) 
      ]
    )
  }
}