import { h } from 'vue'
export default {
  $_icon: {
    name: "XMark",
    vendor: "H",
    type: ["24","outline"],
    tags: ["x","mark"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-x-mark"},
      [ 
        h(
          "path",
          {"d":"M6 18L18 6M6 6L18 18","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}