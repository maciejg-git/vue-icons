import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaF",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","f"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V13H14V11H11V9H15V7H9Z"}
        ) 
      ]
    )
  }
}