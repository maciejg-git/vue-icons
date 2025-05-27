import { h } from 'vue'
export default {
  $_icon: {
    name: "PauseBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pause","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.1 3 19 3M11 16H9V8H11V16M15 16H13V8H15V16Z"}
        ) 
      ]
    )
  }
}