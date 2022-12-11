import { h } from 'vue'
export default {
  $_icon: {
    name: "Moon",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["moon"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}