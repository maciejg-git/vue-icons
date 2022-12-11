import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartPie",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chart","pie"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"}
        ),
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"}
        ) 
      ]
    )
  }
}