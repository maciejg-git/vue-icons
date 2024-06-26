import { h } from 'vue'
export default {
  $_icon: {
    name: "TextLong",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["text","long"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,5H20V7H4V5M4,9H20V11H4V9M4,13H20V15H4V13M4,17H14V19H4V17Z"}
        ) 
      ]
    )
  }
}