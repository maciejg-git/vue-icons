import { h } from 'vue'
export default {
  $_icon: {
    name: "CropFree",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["crop","free"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19A2,2 0 0,0 21,19V15H19M5,15H3V19A2,2 0 0,0 5,21H9V19H5M3,5V9H5V5H9V3H5A2,2 0 0,0 3,5Z"}
        ) 
      ]
    )
  }
}