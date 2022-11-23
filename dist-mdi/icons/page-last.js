import { h } from 'vue'
export default {
  $_icon: {
    name: "PageLast",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["page","last"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"}
        ) 
      ]
    )
  }
}