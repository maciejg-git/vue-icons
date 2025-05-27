import { h } from 'vue'
export default {
  $_icon: {
    name: "LanguageKotlin",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["language","kotlin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 2H22L12 12L22 22H2Z"}
        ) 
      ]
    )
  }
}