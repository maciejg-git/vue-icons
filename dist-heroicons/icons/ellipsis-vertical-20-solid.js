import { h } from 'vue'
export default {
  $_icon: {
    name: "EllipsisVertical",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["ellipsis","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"}
        ) 
      ]
    )
  }
}