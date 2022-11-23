import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["chevron","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}
        ) 
      ]
    )
  }
}