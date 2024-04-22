import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsRightLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrows","right","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"}
        ) 
      ]
    )
  }
}