import { h } from 'vue'
export default {
  $_icon: {
    name: "FastForward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fast","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z"}
        ) 
      ]
    )
  }
}