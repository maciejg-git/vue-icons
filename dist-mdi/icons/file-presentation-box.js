import { h } from 'vue'
export default {
  $_icon: {
    name: "FilePresentationBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","presentation","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"}
        ) 
      ]
    )
  }
}