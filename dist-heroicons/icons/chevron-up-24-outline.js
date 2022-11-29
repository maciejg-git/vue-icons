import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M4.5 15.75L12 8.25L19.5 15.75","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}