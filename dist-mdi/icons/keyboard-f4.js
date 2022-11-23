import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF4",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","f4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5 7H11V9H7V11H10V13H7V17H5V7M13 7H15V11H17V7H19V17H17V13H13V7Z"}
        ) 
      ]
    )
  }
}