import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"m4.5 15.75 7.5-7.5 7.5 7.5"}
        ) 
      ]
    )
  }
}