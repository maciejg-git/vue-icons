import { h } from 'vue'
export default {
  $_icon: {
    name: "EllipsisHorizontal",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["ellipsis","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"}
        ) 
      ]
    )
  }
}