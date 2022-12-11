import { h } from 'vue'
export default {
  $_icon: {
    name: "Bars4",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["bars","4"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"}
        ) 
      ]
    )
  }
}