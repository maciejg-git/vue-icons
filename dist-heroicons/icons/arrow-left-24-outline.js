import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeft",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-left"},
      [ 
        h(
          "path",
          {"d":"M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}