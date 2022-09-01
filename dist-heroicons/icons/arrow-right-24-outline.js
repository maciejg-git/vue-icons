import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowRight",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-right"},
      [ 
        h(
          "path",
          {"d":"M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}