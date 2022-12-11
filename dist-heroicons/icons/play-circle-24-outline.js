import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayCircle",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["play","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
        ),
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"}
        ) 
      ]
    )
  }
}