import { h } from 'vue'
export default {
  $_icon: {
    name: "Bucket",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bucket"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z"}
        ) 
      ]
    )
  }
}