import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnifyingGlassMinus",
    vendor: "H",
    type: ["24","Outline"],
    tags: ["magnifying","glass","minus"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-magnifying-glass-minus"},
      [ 
        h(
          "path",
          {"d":"M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM13.5 10.5H7.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}