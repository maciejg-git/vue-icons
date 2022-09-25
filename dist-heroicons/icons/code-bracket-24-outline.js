import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeBracket",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["code","bracket"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-code-bracket"},
      [ 
        h(
          "path",
          {"d":"M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}