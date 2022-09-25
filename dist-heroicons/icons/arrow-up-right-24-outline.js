import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpRight",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["arrow","up","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-up-right"},
      [ 
        h(
          "path",
          {"d":"M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}