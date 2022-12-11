import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","down","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"}
        ) 
      ]
    )
  }
}