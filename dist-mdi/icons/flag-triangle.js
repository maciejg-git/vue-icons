import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagTriangle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flag","triangle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z"}
        ) 
      ]
    )
  }
}