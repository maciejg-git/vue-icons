import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageBookmarkOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","bookmark","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M18 14V6H13V14L15.5 12.5L18 14"}
        ) 
      ]
    )
  }
}