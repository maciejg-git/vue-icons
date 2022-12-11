import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowSmallRight",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["arrow","small","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}