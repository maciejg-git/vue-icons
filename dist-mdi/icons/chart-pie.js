import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartPie",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","pie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z"}
        ) 
      ]
    )
  }
}