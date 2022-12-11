import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronUpDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["chevron","up","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"}
        ) 
      ]
    )
  }
}