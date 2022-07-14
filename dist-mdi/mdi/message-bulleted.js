import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageBulleted",
    vendor: "Mdi",
    type: "",
    tags: ["message","bulleted"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-bulleted"},
      [ 
        h(
          "path",
          {"d":"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M8,14H6V12H8V14M8,11H6V9H8V11M8,8H6V6H8V8M15,14H10V12H15V14M18,11H10V9H18V11M18,8H10V6H18V8Z"}
        ) 
      ]
    )
  }
}