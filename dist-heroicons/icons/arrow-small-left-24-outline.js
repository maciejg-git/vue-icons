import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSmallLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","small","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 12h-15m0 0 6.75 6.75M4.5 12l6.75-6.75"}
        ) 
      ]
    )
  }
}