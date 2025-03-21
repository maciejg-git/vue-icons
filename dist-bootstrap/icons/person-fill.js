import { h } from 'vue'
export default {
  $_icon: {
    name: "PersonFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["person","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"}
        ) 
      ]
    )
  }
}