import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars3BottomRight",
    vendor: "H",
    type: ["24","outline"],
    tags: ["bars","3","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bars-3-bottom-right"},
      [ 
        h(
          "path",
          {"d":"M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}