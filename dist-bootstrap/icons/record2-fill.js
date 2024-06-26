import { h } from 'vue'
export default {
  $_icon: {
    name: "Record2Fill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["record2","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}
        ),
        h(
          "path",
          {"d":"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"}
        ) 
      ]
    )
  }
}