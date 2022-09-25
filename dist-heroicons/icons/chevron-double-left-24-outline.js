import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["chevron","double","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-double-left"},
      [ 
        h(
          "path",
          {"d":"M18.75 19.5L11.25 12L18.75 4.5M12.75 19.5L5.25 12L12.75 4.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}