import { h } from 'vue'
export default {
  $_icon: {
    name: "Dot",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["dot"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"}
        ) 
      ]
    )
  }
}