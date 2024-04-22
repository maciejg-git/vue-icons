import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","uturn","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"}
        ) 
      ]
    )
  }
}