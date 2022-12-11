import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusCircle",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["minus","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}