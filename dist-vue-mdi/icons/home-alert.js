import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 3L2 12H5V20H19V12H22L12 3M13 18H11V16H13V18M13 14H11V8H13V14Z"}
        ) 
      ]
    )
  }
}