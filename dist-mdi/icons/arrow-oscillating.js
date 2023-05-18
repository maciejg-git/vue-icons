import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowOscillating",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arrow","oscillating"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 14H9L5 18L1 14H4C4 11.3 5.7 6.6 11 6.1V8.1C7.6 8.6 6 11.9 6 14M20 14C20 11.3 18.3 6.6 13 6.1V8.1C16.4 8.7 18 11.9 18 14H15L19 18L23 14H20Z"}
        ) 
      ]
    )
  }
}