import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDown",
    vendor: "H",
    type: ["24","outline"],
    tags: ["chevron","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-down"},
      [ 
        h(
          "path",
          {"d":"M19.5 8.25L12 15.75L4.5 8.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}