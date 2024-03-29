import { h } from 'vue'
export default {
  $_icon: {
    name: "CropPortrait",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["crop","portrait"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,19H7V5H17M17,3H7A2,2 0 0,0 5,5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z"}
        ) 
      ]
    )
  }
}