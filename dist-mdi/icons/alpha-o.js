import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaO",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","o"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,7A2,2 0 0,0 9,9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H11M11,9H13V15H11V9Z"}
        ) 
      ]
    )
  }
}