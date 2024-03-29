import { h } from 'vue'
export default {
  $_icon: {
    name: "Square",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,3V21H21V3"}
        ) 
      ]
    )
  }
}