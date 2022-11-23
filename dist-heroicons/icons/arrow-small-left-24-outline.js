import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSmallLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["arrow","small","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M19.5 12L4.5 12M4.5 12L11.25 18.75M4.5 12L11.25 5.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}