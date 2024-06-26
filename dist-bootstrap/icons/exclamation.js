import { h } from 'vue'
export default {
  $_icon: {
    name: "Exclamation",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["exclamation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z"}
        ) 
      ]
    )
  }
}