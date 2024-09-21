import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTurnDownLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","turn","down","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"}
        ) 
      ]
    )
  }
}