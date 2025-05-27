import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaV",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","v"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,17H13L15,7H13L12,12L11,7H9Z"}
        ) 
      ]
    )
  }
}