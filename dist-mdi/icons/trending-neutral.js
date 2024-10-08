import { h } from 'vue'
export default {
  $_icon: {
    name: "TrendingNeutral",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["trending","neutral"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,12L18,8V11H3V13H18V16L22,12Z"}
        ) 
      ]
    )
  }
}