import { h } from 'vue'
export default {
  $_icon: {
    name: "CropSquare",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["crop","square"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"}
        ) 
      ]
    )
  }
}