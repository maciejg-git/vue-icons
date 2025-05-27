import { h } from 'vue'
export default {
  $_icon: {
    name: "Comma",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["comma"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z"}
        ) 
      ]
    )
  }
}