import { h } from 'vue'
export default {
  $_icon: {
    name: "RecordCircle",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["record","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}
        ),
        h(
          "path",
          {"d":"M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}
        ) 
      ]
    )
  }
}