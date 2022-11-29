import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars2",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["bars","2"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M3.75 9H20.25M3.75 15.75H20.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}