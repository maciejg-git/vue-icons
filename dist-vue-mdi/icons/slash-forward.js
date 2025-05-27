import { h } from 'vue'
export default {
  $_icon: {
    name: "SlashForward",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["slash","forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 21L14.9 3H17L9.1 21H7Z"}
        ) 
      ]
    )
  }
}