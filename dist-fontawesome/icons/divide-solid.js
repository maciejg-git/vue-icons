import { h } from 'vue'
export default {
  $_icon: {
    name: "Divide",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["divide"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M272 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 320a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 288c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l352 0z"}
        ) 
      ]
    )
  }
}