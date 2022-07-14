import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageText",
    vendor: "Mdi",
    type: "",
    tags: ["message","text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-text"},
      [ 
        h(
          "path",
          {"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"}
        ) 
      ]
    )
  }
}