import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignBottom",
    vendor: "B",
    license: "MIT",
    type: [],
    tags: ["align","bottom"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16"},
      [ 
        h(
          "rect",
          {"width":"4","height":"12","x":"6","y":"1","rx":"1"}
        ),
        h(
          "path",
          {"d":"M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z"}
        ) 
      ]
    )
  }
}