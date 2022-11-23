import { h } from 'vue'
export default {
  $_icon: {
    name: "Plus",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["plus"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M12 4.5V19.5M19.5 12L4.5 12","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}