import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUpDown",
    vendor: "H",
    type: ["24","Outline"],
    tags: ["chevron","up","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chevron-up-down"},
      [ 
        h(
          "path",
          {"d":"M8.25 15L12 18.75L15.75 15M8.25 9L12 5.25L15.75 9","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}