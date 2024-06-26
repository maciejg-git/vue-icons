import { h } from 'vue'
export default {
  $_icon: {
    name: "BucketOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bucket","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 4H21V7H20L17.5 21H6.5L4 7H3V4M17.97 7H6.03L8.15 19H15.85L17.97 7Z"}
        ) 
      ]
    )
  }
}