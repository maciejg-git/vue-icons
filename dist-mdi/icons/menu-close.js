import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuClose",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","close"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 6H13V8H3V6M3 16H13V18H3V16M3 11H15V13H3V11M16 7L14.58 8.39L18.14 12L14.58 15.61L16 17L21 12L16 7Z"}
        ) 
      ]
    )
  }
}