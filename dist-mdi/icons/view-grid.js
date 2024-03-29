import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewGrid",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","grid"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}
        ) 
      ]
    )
  }
}