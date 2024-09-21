import { h } from 'vue'
export default {
  $_icon: {
    name: "Italic",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["italic"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"}
        ) 
      ]
    )
  }
}