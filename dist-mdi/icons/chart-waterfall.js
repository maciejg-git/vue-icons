import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartWaterfall",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","waterfall"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 2H4V20H22V22H2V2M17 2H20V18H17V2M6 11H9V18H6V11M13 3H16V7H13V3M10 8H13V12H10V8Z"}
        ) 
      ]
    )
  }
}