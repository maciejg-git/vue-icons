import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["arrow","uturn","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-uturn-left"},
      [ 
        h(
          "path",
          {"d":"M9 15L3 9M3 9L9 3M3 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}