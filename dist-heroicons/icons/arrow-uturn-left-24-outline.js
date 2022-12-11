import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","uturn","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"}
        ) 
      ]
    )
  }
}