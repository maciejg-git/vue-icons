import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardTab",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","tab"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,18H22V6H20M11.59,7.41L15.17,11H1V13H15.17L11.59,16.58L13,18L19,12L13,6L11.59,7.41Z"}
        ) 
      ]
    )
  }
}