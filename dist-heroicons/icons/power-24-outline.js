import { h } from 'vue'
export default {
  $_icon: {
    name: "Power",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["power"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"}
        ) 
      ]
    )
  }
}