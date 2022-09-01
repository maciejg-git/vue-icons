import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "H",
    type: ["24","outline"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-minus"},
      [ 
        h(
          "path",
          {"d":"M19.5 12L4.5 12","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}