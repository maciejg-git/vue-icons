import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaD",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","d"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H9M11,9H13V15H11V9Z"}
        ) 
      ]
    )
  }
}