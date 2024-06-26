import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowOpenVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["window","open","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z"}
        ) 
      ]
    )
  }
}