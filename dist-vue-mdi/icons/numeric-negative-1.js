import { h } from 'vue'
export default {
  $_icon: {
    name: "NumericNegative1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","negative","1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 7V9H15V17H17V7H13M11 13H5V11H11V13Z"}
        ) 
      ]
    )
  }
}