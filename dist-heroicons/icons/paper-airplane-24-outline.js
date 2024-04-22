import { h } from 'vue'
export default {
  $_icon: {
    name: "PaperAirplane",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["paper","airplane"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"}
        ) 
      ]
    )
  }
}