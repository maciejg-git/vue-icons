import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","up","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"}
        ) 
      ]
    )
  }
}