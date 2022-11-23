import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuUp",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,15L12,10L17,15H7Z"}
        ) 
      ]
    )
  }
}