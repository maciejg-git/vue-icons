import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusSmall",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["plus","small"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"}
        ) 
      ]
    )
  }
}