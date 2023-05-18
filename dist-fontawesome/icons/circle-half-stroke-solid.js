import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalfStroke",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["circle","half","stroke"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"}
        ) 
      ]
    )
  }
}