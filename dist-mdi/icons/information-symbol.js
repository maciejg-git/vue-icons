import { h } from 'vue'
export default {
  $_icon: {
    name: "InformationSymbol",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["information","symbol"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 9H13V7H11V9M11 17H13V11H11V17Z"}
        ) 
      ]
    )
  }
}