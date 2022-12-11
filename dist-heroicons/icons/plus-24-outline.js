import { h } from 'vue'
export default {
  $_icon: {
    name: "Plus",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 4.5v15m7.5-7.5h-15"}
        ) 
      ]
    )
  }
}