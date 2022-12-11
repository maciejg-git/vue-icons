import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}