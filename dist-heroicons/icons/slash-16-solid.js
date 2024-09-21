import { h } from 'vue'
export default {
  $_icon: {
    name: "Slash",
    vendor: "H",
    license: "MIT",
    type: ["16","Solid"],
    tags: ["slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 16 16","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M10.074 2.047a.75.75 0 0 1 .449.961L6.705 13.507a.75.75 0 0 1-1.41-.513L9.113 2.496a.75.75 0 0 1 .961-.449Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}