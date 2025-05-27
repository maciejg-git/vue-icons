import { h } from 'vue'
export default {
  $_icon: {
    name: "Slash",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M15.256 3.042a.75.75 0 0 1 .449.962l-6 16.5a.75.75 0 1 1-1.41-.513l6-16.5a.75.75 0 0 1 .961-.449Z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}