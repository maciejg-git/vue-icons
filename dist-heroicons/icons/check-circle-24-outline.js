import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckCircle",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["check","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}
        ) 
      ]
    )
  }
}