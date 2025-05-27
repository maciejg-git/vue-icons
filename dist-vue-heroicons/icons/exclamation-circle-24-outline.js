import { h } from 'vue'
export default {
  $_icon: {
    name: "ExclamationCircle",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["exclamation","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}
        ) 
      ]
    )
  }
}