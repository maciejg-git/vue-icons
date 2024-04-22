import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronLeft",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["chevron","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}