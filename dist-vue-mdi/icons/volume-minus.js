import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeMinus",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["volume","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,9H7L12,4V20L7,15H3V9M14,11H22V13H14V11Z"}
        ) 
      ]
    )
  }
}