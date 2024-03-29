import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M10,7V9H12V17H14V7H10Z"}
        ) 
      ]
    )
  }
}