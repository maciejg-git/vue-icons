import { h } from 'vue'
export default {
  $_icon: {
    name: "Text",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["text"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"}
        ) 
      ]
    )
  }
}