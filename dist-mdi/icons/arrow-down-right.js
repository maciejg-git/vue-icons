import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","down","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21.5 14.5L16 20L10.5 14.5L11.91 13.09L15 16.17V10.5C15 8 13 6 10.5 6H4V4H10.5C14.09 4 17 6.91 17 10.5V16.17L20.09 13.08L21.5 14.5Z"}
        ) 
      ]
    )
  }
}