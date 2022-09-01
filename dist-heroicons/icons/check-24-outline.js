import { h } from 'vue'
export default {
  $_icon: {
    name: "Check",
    vendor: "H",
    type: ["24","outline"],
    tags: ["check"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-check"},
      [ 
        h(
          "path",
          {"d":"M4.5 12.75L10.5 18.75L19.5 5.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}