import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronLeft",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["chevron","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}