import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars2",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["bars","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}