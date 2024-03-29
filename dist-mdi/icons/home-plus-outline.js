import { h } from 'vue'
export default {
  $_icon: {
    name: "HomePlusOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["home","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 14H19V17H22V19H19V22H17V19H14V17H17V14M5 20V12H2L12 3L22 12H17V10.19L12 5.69L7 10.19V18H12C12 18.7 12.12 19.37 12.34 20H5Z"}
        ) 
      ]
    )
  }
}