import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusSmall",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["minus","small"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"}
        ) 
      ]
    )
  }
}