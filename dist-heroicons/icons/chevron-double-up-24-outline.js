import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleUp",
    vendor: "H",
    type: ["24","outline"],
    tags: ["chevron","double","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-double-up"},
      [ 
        h(
          "path",
          {"d":"M4.5 12.75L12 5.25L19.5 12.75M4.5 18.75L12 11.25L19.5 18.75","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}