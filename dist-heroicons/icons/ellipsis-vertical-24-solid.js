import { h } from 'vue'
export default {
  $_icon: {
    name: "EllipsisVertical",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["ellipsis","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}