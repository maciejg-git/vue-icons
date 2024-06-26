import { h } from 'vue'
export default {
  $_icon: {
    name: "Pause",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["pause"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M15.75 5.25v13.5m-7.5-13.5v13.5"}
        ) 
      ]
    )
  }
}