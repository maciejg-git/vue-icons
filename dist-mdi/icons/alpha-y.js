import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaY",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","y"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9Z"}
        ) 
      ]
    )
  }
}