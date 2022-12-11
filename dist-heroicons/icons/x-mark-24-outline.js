import { h } from 'vue'
export default {
  $_icon: {
    name: "XMark",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["x","mark"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M6 18L18 6M6 6l12 12"}
        ) 
      ]
    )
  }
}