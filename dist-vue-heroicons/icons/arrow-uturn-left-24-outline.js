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
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"}
        ) 
      ]
    )
  }
}