import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chevron","double","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"}
        ) 
      ]
    )
  }
}