import { h } from 'vue'
export default {
  $_icon: {
    name: "Record",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["record"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10"}
        ) 
      ]
    )
  }
}