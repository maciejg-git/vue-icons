import { h } from 'vue'
export default {
  $_icon: {
    name: "PercentBadge",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["percent","badge"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3.597 7.348a3 3 0 0 0 0 5.304 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75 3 3 0 0 0 0-5.305 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75Zm9.933.182a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm.47 5.22a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}