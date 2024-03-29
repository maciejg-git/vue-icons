import { h } from 'vue'
export default {
  $_icon: {
    name: "FormatListGroup",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["format","list","group"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5 5V19H7V21H3V3H7V5H5M20 7H7V9H20V7M20 11H7V13H20V11M20 15H7V17H20V15Z"}
        ) 
      ]
    )
  }
}