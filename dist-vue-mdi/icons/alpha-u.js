import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaU",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","u"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9Z"}
        ) 
      ]
    )
  }
}