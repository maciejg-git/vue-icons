import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftCircle",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["arrow","left","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "g",
          {"clip-path":"url(#a)"}
        ),
        h(
          "defs",
          undefined
        ) 
      ]
    )
  }
}