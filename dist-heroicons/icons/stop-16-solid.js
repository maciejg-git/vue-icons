import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "rect",
          {"width":"10","height":"10","x":"3","y":"3","rx":"1.5"}
        ) 
      ]
    )
  }
}