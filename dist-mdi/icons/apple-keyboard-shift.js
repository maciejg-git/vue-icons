import { h } from 'vue'
export default {
  $_icon: {
    name: "AppleKeyboardShift",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["apple","keyboard","shift"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,18V12H17.17L12,6.83L6.83,12H9V18H15M12,4L22,14H17V20H7V14H2L12,4Z"}
        ) 
      ]
    )
  }
}