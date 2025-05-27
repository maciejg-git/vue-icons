import { h } from 'vue'
export default {
  $_icon: {
    name: "TextShort",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["text","short"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4,9H20V11H4V9M4,13H14V15H4V13Z"}
        ) 
      ]
    )
  }
}