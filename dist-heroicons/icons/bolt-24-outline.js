import { h } from 'vue'
export default {
  $_icon: {
    name: "Bolt",
    vendor: "H",
    type: ["24","outline"],
    tags: ["bolt"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bolt"},
      [ 
        h(
          "path",
          {"d":"M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}