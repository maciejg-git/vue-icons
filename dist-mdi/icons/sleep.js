import { h } from 'vue'
export default {
  $_icon: {
    name: "Sleep",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["sleep"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"}
        ) 
      ]
    )
  }
}