import { h } from 'vue'
export default {
  $_icon: {
    name: "EqualizerOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["equalizer","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,21H9V3H15V21M11,19H13V5H11V19M8,21H2V11H8V21M4,19H6V13H4V19M22,21H16V8H22V21M18,19H20V10H18V19Z"}
        ) 
      ]
    )
  }
}