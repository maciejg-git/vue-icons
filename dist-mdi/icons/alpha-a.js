import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaA",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","a"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11,7A2,2 0 0,0 9,9V17H11V13H13V17H15V9A2,2 0 0,0 13,7H11M11,9H13V11H11V9Z"}
        ) 
      ]
    )
  }
}