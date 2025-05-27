import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveBox",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["archive","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"d":"M3 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3 6h10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Zm3 2.75A.75.75 0 0 1 6.75 8h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 8.75Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}