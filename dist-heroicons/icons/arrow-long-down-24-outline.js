import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongDown",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","long","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-long-down"},
      [ 
        h(
          "path",
          {"d":"M15.75 17.25L12 21M12 21L8.25 17.25M12 21L12 3","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}