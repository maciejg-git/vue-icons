import { h } from 'vue'
export default {
  $_icon: {
    name: "Document",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["document"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M3 3.5C3 2.67157 3.67157 2 4.5 2H11.3787C11.7765 2 12.158 2.15804 12.4393 2.43934L16.5607 6.56066C16.842 6.84197 17 7.2235 17 7.62132V16.5C17 17.3284 16.3284 18 15.5 18H4.5C3.67157 18 3 17.3284 3 16.5V3.5Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}