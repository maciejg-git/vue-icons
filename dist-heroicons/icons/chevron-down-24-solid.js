import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronDown",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["chevron","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}