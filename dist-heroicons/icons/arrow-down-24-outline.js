import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDown",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-down"},
      [ 
        h(
          "path",
          {"d":"M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}