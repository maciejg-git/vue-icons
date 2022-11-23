import { h } from 'vue'
export default {
  $_icon: {
    name: "Garage",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["garage"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12M8,15H16V17H8V15M16,18V20H8V18H16Z"}
        ) 
      ]
    )
  }
}