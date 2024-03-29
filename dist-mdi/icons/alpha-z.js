import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaZ",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","z"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V9H13L9,15V17H15V15H11L15,9V7H9Z"}
        ) 
      ]
    )
  }
}