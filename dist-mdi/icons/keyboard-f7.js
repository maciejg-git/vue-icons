import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF7",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","f7"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5 7H11V9H7V11H10V13H7V17H5V7M15 17H13L17 9H13V7H19V9L15 17Z"}
        ) 
      ]
    )
  }
}