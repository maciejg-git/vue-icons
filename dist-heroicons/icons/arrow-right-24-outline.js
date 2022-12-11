import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRight",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}
        ) 
      ]
    )
  }
}