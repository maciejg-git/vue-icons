import { h } from 'vue'
export default {
  $_icon: {
    name: "DogSide",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["dog","side"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,3L15,7L18,10L19,9L20,10L22,8L19,5V3M3,7L2,8L5,11V14L4,15V21H6V18L8,15H15V21H17V11L14,8L13,9H5L3,7Z"}
        ) 
      ]
    )
  }
}