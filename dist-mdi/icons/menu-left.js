import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,7L9,12L14,17V7Z"}
        ) 
      ]
    )
  }
}