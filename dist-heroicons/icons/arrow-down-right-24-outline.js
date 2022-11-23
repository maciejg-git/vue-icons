import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownRight",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["arrow","down","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M4.5 4.5L19.5 19.5M19.5 19.5V8.25M19.5 19.5H8.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}