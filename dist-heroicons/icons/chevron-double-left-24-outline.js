import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chevron","double","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"}
        ) 
      ]
    )
  }
}