import { h } from 'vue'
export default {
  $_icon: {
    name: "Tune",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["tune"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"}
        ) 
      ]
    )
  }
}