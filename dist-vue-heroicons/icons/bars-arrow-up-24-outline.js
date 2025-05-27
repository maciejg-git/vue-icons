import { h } from 'vue'
export default {
  $_icon: {
    name: "BarsArrowUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["bars","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"}
        ) 
      ]
    )
  }
}