import { h } from 'vue'
export default {
  $_icon: {
    name: "MusicRestWhole",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["music","rest","whole"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 10H16V14H8V10H6V9H18V10Z"}
        ) 
      ]
    )
  }
}