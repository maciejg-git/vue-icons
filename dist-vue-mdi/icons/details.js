import { h } from 'vue'
export default {
  $_icon: {
    name: "Details",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["details"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z"}
        ) 
      ]
    )
  }
}