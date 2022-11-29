import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","uturn","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M15 15L9 21M9 21L3 15M9 21V9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9V12","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}