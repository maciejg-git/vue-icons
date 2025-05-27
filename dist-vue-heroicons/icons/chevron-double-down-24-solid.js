import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDoubleDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["chevron","double","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z","clip-rule":"evenodd"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}