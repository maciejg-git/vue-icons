import { h } from 'vue'
export default {
  $_icon: {
    name: "Pause",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["pause"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-pause"},
      [ 
        h(
          "path",
          {"d":"M15.75 5.25L15.75 18.75M8.25 5.25V18.75","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}