import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaW",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","w"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,17A2,2 0 0,1 7,15V7H9V15H11V8H13V15H15V7H17V15A2,2 0 0,1 15,17H9Z"}
        ) 
      ]
    )
  }
}