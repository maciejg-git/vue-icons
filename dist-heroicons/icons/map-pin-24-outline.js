import { h } from 'vue'
export default {
  $_icon: {
    name: "MapPin",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["map","pin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","fill":"currentColor","viewBox":"0 0 24 24","stroke-width":"1.5","stroke":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}
        ),
        h(
          "path",
          {"stroke-linecap":"round","stroke-linejoin":"round","d":"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}
        ) 
      ]
    )
  }
}