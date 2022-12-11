import { h } from 'vue'
export default {
  $_icon: {
    name: "Bolt",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["bolt"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"}
        ) 
      ]
    )
  }
}