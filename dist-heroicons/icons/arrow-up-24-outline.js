import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUp",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-up"},
      [ 
        h(
          "path",
          {"d":"M4.5 10.5L12 3M12 3L19.5 10.5M12 3V21","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}