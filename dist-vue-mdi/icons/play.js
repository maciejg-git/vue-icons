import { h } from 'vue'
export default {
  $_icon: {
    name: "Play",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["play"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8,5.14V19.14L19,12.14L8,5.14Z"}
        ) 
      ]
    )
  }
}