import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleRight",
    vendor: "H",
    type: ["24","Outline"],
    tags: ["chevron","double","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-double-right"},
      [ 
        h(
          "path",
          {"d":"M11.25 4.5L18.75 12L11.25 19.5M5.25 4.5L12.75 12L5.25 19.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}