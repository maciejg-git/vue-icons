import { h } from 'vue'
export default {
  $_icon: {
    name: "EllipsisHorizontal",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["ellipsis","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M3 10C3 9.17157 3.67157 8.5 4.5 8.5C5.32843 8.5 6 9.17157 6 10C6 10.8284 5.32843 11.5 4.5 11.5C3.67157 11.5 3 10.8284 3 10Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M15.5 8.5C14.6716 8.5 14 9.17157 14 10C14 10.8284 14.6716 11.5 15.5 11.5C16.3284 11.5 17 10.8284 17 10C17 9.17157 16.3284 8.5 15.5 8.5Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}