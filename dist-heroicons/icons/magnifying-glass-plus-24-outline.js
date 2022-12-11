import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnifyingGlassPlus",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["magnifying","glass","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"}
        ) 
      ]
    )
  }
}