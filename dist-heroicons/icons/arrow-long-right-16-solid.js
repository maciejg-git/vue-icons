import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongRight",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["arrow","long","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}