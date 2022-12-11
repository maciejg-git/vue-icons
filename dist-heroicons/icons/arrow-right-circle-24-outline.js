import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRightCircle",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","right","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
        ) 
      ]
    )
  }
}