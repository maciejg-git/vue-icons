import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSmallUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","small","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"}
        ) 
      ]
    )
  }
}