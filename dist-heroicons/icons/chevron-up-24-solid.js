import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["chevron","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}