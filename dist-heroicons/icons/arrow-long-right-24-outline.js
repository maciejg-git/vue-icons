import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongRight",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","long","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}
        ) 
      ]
    )
  }
}