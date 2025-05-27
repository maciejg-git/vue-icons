import { h } from 'vue'
export default {
  $_icon: {
    name: "Octagon",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["octagon"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27"}
        ) 
      ]
    )
  }
}