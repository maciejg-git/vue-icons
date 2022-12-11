import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","uturn","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"}
        ) 
      ]
    )
  }
}