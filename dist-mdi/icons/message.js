import { h } from 'vue'
export default {
  $_icon: {
    name: "Message",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["message"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}
        ) 
      ]
    )
  }
}