import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartLineStacked",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","line","stacked"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17.45,15.18L22,6.81V19L22,21H2V3H4V15.54L4,19H4.31L6,19H6.57L10.96,11.44L17.45,15.18M22,3L21.97,3.45L17,11L10,6L6,12V3H22Z"}
        ) 
      ]
    )
  }
}