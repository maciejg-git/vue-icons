import { h } from 'vue'
export default {
  $_icon: {
    name: "DogService",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["dog","service"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,8L17,11V21H15V15H8L6,18V21H4V15L5,14V11L2,8L3,7L5,9H7V12A1,1 0 0,0 8,13H12A1,1 0 0,0 13,12V9L14,8M19,5V3L15,7L18,10L19,9L20,10L22,8L19,5M11.5,9.5L4.5,2.5C4.23,2.22 3.79,2.22 3.5,2.5V2.5C3.22,2.77 3.22,3.21 3.5,3.5L10.5,10.5C10.77,10.78 11.21,10.78 11.5,10.5V10.5C11.78,10.23 11.78,9.79 11.5,9.5Z"}
        ) 
      ]
    )
  }
}