import { h } from 'vue'
export default {
  $_icon: {
    name: "Television",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["television"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,17H3V5H21M21,3H3A2,2 0 0,0 1,5V17A2,2 0 0,0 3,19H8V21H16V19H21A2,2 0 0,0 23,17V5A2,2 0 0,0 21,3Z"}
        ) 
      ]
    )
  }
}