import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars3BottomRight",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["bars","3","bottom","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}
        ) 
      ]
    )
  }
}