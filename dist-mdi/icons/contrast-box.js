import { h } from 'vue'
export default {
  $_icon: {
    name: "ContrastBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["contrast","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17,15.5H12V17H17M19,19H5L19,5M5.5,7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
        ) 
      ]
    )
  }
}