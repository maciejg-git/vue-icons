import { h } from 'vue'
export default {
  $_icon: {
    name: "Arrow90degDown",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["arrow","90deg","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-arrow-90deg-down"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"}
        ) 
      ]
    )
  }
}