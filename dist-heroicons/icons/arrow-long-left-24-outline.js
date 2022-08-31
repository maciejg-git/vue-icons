import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongLeft",
    vendor: "H",
    type: ["24","Outline"],
    tags: ["arrow","long","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-long-left"},
      [ 
        h(
          "path",
          {"d":"M6.75 15.75L3 12M3 12L6.75 8.25M3 12H21","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}