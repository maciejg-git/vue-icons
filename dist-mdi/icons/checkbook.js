import { h } from 'vue'
export default {
  $_icon: {
    name: "Checkbook",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["checkbook"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5,14H19V15H5V14M21,17V8H3V17H21M1,5H23V19H1V5M5,10H12V12H5V10Z"}
        ) 
      ]
    )
  }
}