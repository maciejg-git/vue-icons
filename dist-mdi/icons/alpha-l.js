import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaL",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H15V15H11V7H9Z"}
        ) 
      ]
    )
  }
}