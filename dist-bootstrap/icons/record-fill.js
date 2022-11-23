import { h } from 'vue'
export default {
  $_icon: {
    name: "RecordFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["record","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"}
        ) 
      ]
    )
  }
}