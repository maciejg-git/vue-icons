import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}