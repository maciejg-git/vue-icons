import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaK",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","k"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z"}
        ) 
      ]
    )
  }
}