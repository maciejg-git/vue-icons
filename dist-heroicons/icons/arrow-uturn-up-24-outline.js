import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUturnUp",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","uturn","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-uturn-up"},
      [ 
        h(
          "path",
          {"d":"M9 9L15 3M15 3L21 9M15 3L15 15C15 18.3137 12.3137 21 9 21C5.68629 21 3 18.3137 3 15L3 12","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}