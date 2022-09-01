import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpCircle",
    vendor: "H",
    type: ["24","outline"],
    tags: ["arrow","up","circle"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-up-circle"},
      [ 
        h(
          "path",
          {"d":"M15 11.25L12 8.25M12 8.25L9 11.25M12 8.25L12 15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}