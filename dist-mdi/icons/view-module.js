import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewModule",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","module"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z"}
        ) 
      ]
    )
  }
}