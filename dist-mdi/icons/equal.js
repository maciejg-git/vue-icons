import { h } from 'vue'
export default {
  $_icon: {
    name: "Equal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,10H5V8H19V10M19,16H5V14H19V16Z"}
        ) 
      ]
    )
  }
}