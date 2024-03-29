import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardTabReverse",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","tab","reverse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 6H2V18H4M11 6L5 12L11 18L12.41 16.58L8.83 13H23V11H8.83L12.41 7.41L11 6Z"}
        ) 
      ]
    )
  }
}