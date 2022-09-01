import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpLeft",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","up","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-up-left"},
      [ 
        h(
          "path",
          {"d":"M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}