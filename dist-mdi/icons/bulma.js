import { h } from 'vue'
export default {
  $_icon: {
    name: "Bulma",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bulma"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11.38 2L6.38 7L5.13 15.75L11.38 22L18.88 17L13.88 12L17.63 8.25L11.38 2Z"}
        ) 
      ]
    )
  }
}