import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}