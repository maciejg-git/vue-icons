import { h } from 'vue'
export default {
  $_icon: {
    name: "OctagonOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["octagon","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1"}
        ) 
      ]
    )
  }
}