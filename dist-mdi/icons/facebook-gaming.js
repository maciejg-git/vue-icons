import { h } from 'vue'
export default {
  $_icon: {
    name: "FacebookGaming",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["facebook","gaming"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9.5 14.5V9.5H21V21H15.5V14.5H9.5M3 3H21L21 8.5H8.5V15.5H14.5V21H3V3Z"}
        ) 
      ]
    )
  }
}