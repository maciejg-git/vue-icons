import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardBackspace",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["keyboard","backspace"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"}
        ) 
      ]
    )
  }
}