import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageReplyText",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","reply","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"}
        ) 
      ]
    )
  }
}