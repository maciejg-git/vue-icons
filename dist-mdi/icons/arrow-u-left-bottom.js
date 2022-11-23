import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowULeftBottom",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","u","left","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 10.5C20 14.09 17.09 17 13.5 17H7.83L10.92 20.09L9.5 21.5L4 16L9.5 10.5L10.91 11.91L7.83 15H13.5C16 15 18 13 18 10.5S16 6 13.5 6H6V4H13.5C17.09 4 20 6.91 20 10.5Z"}
        ) 
      ]
    )
  }
}