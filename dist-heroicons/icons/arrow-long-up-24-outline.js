import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLongUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","long","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"}
        ) 
      ]
    )
  }
}