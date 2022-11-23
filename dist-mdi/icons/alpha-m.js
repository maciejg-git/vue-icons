import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaM",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","m"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7A2,2 0 0,0 7,9V17H9V9H11V16H13V9H15V17H17V9A2,2 0 0,0 15,7H9Z"}
        ) 
      ]
    )
  }
}