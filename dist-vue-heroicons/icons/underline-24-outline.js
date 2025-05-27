import { h } from 'vue'
export default {
  $_icon: {
    name: "Underline",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["underline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5"}
        ) 
      ]
    )
  }
}