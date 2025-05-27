import { h } from 'vue'
export default {
  $_icon: {
    name: "TrashCan",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["trash","can"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"}
        ) 
      ]
    )
  }
}