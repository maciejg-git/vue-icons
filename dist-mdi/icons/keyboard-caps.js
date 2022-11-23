import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardCaps",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","caps"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,18H18V16H6M12,8.41L16.59,13L18,11.58L12,5.58L6,11.58L7.41,13L12,8.41Z"}
        ) 
      ]
    )
  }
}