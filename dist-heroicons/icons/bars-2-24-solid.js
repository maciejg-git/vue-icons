import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars2",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["bars","2"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}