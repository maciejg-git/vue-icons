import { h } from 'vue'
export default {
  $_icon: {
    name: "Tie",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z"}
        ) 
      ]
    )
  }
}