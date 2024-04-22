import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"d":"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"}
        ) 
      ]
    )
  }
}