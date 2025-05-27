import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsUpDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrows","up","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"}
        ) 
      ]
    )
  }
}