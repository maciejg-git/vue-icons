import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleDown",
    vendor: "H",
    type: ["24","outline"],
    tags: ["chevron","double","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-double-down"},
      [ 
        h(
          "path",
          {"d":"M19.5 5.25L12 12.75L4.5 5.25M19.5 11.25L12 18.75L4.5 11.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}