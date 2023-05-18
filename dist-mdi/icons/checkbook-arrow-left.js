import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckbookArrowLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["checkbook","arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M5 14H15.53C15.25 14.31 15 14.64 14.8 15H5V14M21 8V12.08C21.72 12.2 22.39 12.45 23 12.8V5H1V19H14.08C14.03 18.68 14 18.34 14 18C14 17.66 14.03 17.33 14.08 17H3V8H21M5 10H12V12H5V10M16 18L19 15V17H23V19H19V21L16 18Z"}
        ) 
      ]
    )
  }
}