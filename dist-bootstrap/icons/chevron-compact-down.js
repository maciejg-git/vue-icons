import { h } from 'vue'
export default {
  $_icon: {
    name: "ChevronCompactDown",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["chevron","compact","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"}
        ) 
      ]
    )
  }
}