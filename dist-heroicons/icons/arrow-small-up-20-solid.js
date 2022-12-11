import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSmallUp",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["arrow","small","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M10 15a.75.75 0 01-.75-.75V7.612L7.29 9.77a.75.75 0 01-1.08-1.04l3.25-3.5a.75.75 0 011.08 0l3.25 3.5a.75.75 0 11-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0110 15z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}