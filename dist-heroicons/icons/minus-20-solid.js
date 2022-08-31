import { h } from 'vue'
export default {
  $_icon: {
    name: "Minus",
    vendor: "H",
    type: ["20","Solid"],
    tags: ["minus"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-minus"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.25 9.25C14.6642 9.25 15 9.58579 15 10C15 10.4142 14.6642 10.75 14.25 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}