import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveBox",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["archive","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","d":"M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}