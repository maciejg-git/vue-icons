import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicRestHalf",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","rest","half"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 14H8V10H16V14H18V15H6V14Z"}
        ) 
      ]
    )
  }
}