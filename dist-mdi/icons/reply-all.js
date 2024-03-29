import { h } from 'vue'
export default {
  $_icon: {
    name: "ReplyAll",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["reply","all"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13,9V5L6,12L13,19V14.9C18,14.9 21.5,16.5 24,20C23,15 20,10 13,9M7,8V5L0,12L7,19V16L3,12L7,8Z"}
        ) 
      ]
    )
  }
}