import { h } from 'vue'
export default {
  $_icon: {
    name: "Calendar3EventFill",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["calendar3","event","fill"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "path",
          {"d":"M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3h16zm-3-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z"}
        ) 
      ]
    )
  }
}