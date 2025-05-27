import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTurnUpLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","turn","up","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5"}
        ) 
      ]
    )
  }
}