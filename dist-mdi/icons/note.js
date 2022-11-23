import { h } from 'vue'
export default {
  $_icon: {
    name: "Note",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["note"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,10V4.5L19.5,10M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9L15,3H5Z"}
        ) 
      ]
    )
  }
}