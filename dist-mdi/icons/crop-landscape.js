import { h } from 'vue'
export default {
  $_icon: {
    name: "CropLandscape",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["crop","landscape"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z"}
        ) 
      ]
    )
  }
}