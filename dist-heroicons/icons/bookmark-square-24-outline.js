import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkSquare",
    vendor: "H",
    type: ["24","Outline"],
    tags: ["bookmark","square"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bookmark-square"},
      [ 
        h(
          "path",
          {"d":"M16.5 3.75V16.5L12 14.25L7.5 16.5V3.75M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V18C20.25 19.2426 19.2426 20.25 18 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V6C3.75 4.75736 4.75736 3.75 6 3.75H7.5M16.5 3.75H7.5","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}