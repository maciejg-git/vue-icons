import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF1",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","f1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6 7H12V9H8V11H11V13H8V17H6V7M14 7H18V17H16V9H14V7Z"}
        ) 
      ]
    )
  }
}