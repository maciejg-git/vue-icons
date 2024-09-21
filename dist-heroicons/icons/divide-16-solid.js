import { h } from 'vue'
export default {
  $_icon: {
    name: "Divide",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["divide"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z","clip-rule":"evenodd"}
        ),
        h(
          "path",
          {"d":"M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"}
        ) 
      ]
    )
  }
}