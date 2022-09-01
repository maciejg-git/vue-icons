import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageBadge",
    vendor: "Mdi",
    type: [],
    tags: ["message","badge"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-badge"},
      [ 
        h(
          "path",
          {"d":"M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3C14 5.8 16.2 8 19 8C20.1 8 21.2 7.6 22 7M16 3C16 4.7 17.3 6 19 6S22 4.7 22 3 20.7 0 19 0 16 1.3 16 3Z"}
        ) 
      ]
    )
  }
}