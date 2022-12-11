import { h } from 'vue'
export default {
  $_icon: {
    name: "Stop",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["stop"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"}
        ) 
      ]
    )
  }
}