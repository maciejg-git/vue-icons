import { h } from 'vue'
export default {
  $_icon: {
    name: "Equals",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["equals"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"d":"M3.75 6a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3.75 13.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"}
        ) 
      ]
    )
  }
}