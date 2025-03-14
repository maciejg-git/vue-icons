import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageReply",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message","reply"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,4C22,2.89 21.1,2 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"}
        ) 
      ]
    )
  }
}