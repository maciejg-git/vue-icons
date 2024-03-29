import { h } from 'vue'
export default {
  $_icon: {
    name: "Equalizer",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["equalizer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,20H14V4H10V20M4,20H8V12H4V20M16,9V20H20V9H16Z"}
        ) 
      ]
    )
  }
}