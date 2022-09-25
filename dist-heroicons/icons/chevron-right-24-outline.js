import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronRight",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["chevron","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-right"},
      [ 
        h(
          "path",
          {"d":"M8.25 4.5L15.75 12L8.25 19.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}