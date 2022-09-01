import { h } from 'vue'
export default {
  $_icon: {
    name: "BarsArrowUp",
    vendor: "H",
    type: ["24","outline"],
    tags: ["bars","arrow","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bars-arrow-up"},
      [ 
        h(
          "path",
          {"d":"M3 4.5H17.25M3 9H12.75M3 13.5H8.25M13.5 12.75L17.25 9M17.25 9L21 12.75M17.25 9V21","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}