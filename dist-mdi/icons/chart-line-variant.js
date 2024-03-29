import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartLineVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chart","line","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"}
        ) 
      ]
    )
  }
}